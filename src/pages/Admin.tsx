import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Package as PackageIcon, Search, Filter } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { usePackages, type Package } from '@/hooks/usePackages';
import PackageForm from '@/components/admin/PackageForm';
import PackagesTable from '@/components/admin/PackagesTable';

const Admin = () => {
  const { packages, loading, error, formatPrice, formatDuration } = usePackages();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const [deletingPackage, setDeletingPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'domestic' | 'international'>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  // Get unique locations based on category filter
  const locations = useMemo(() => {
    const filtered = categoryFilter === 'all' 
      ? packages 
      : packages.filter(p => p.category === categoryFilter);
    return [...new Set(filtered.map(p => p.state_or_country))].sort();
  }, [packages, categoryFilter]);

  // Filter packages
  const filteredPackages = useMemo(() => {
    return packages.filter(pkg => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        pkg.name.toLowerCase().includes(searchLower) ||
        pkg.location.toLowerCase().includes(searchLower) ||
        pkg.state_or_country.toLowerCase().includes(searchLower);

      // Category filter
      const matchesCategory = categoryFilter === 'all' || pkg.category === categoryFilter;

      // Location filter
      const matchesLocation = locationFilter === 'all' || pkg.state_or_country === locationFilter;

      // Status filter
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'active' && pkg.is_active) ||
        (statusFilter === 'inactive' && !pkg.is_active);

      return matchesSearch && matchesCategory && matchesLocation && matchesStatus;
    });
  }, [packages, searchQuery, categoryFilter, locationFilter, statusFilter]);

  const handleCreate = async (data: Omit<Package, 'id'>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('packages').insert([data]);
      if (error) throw error;
      toast.success('Package created successfully!');
      setIsFormOpen(false);
    } catch (err) {
      console.error('Error creating package:', err);
      toast.error('Failed to create package');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdate = async (data: Omit<Package, 'id'>) => {
    if (!editingPackage) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('packages')
        .update(data)
        .eq('id', editingPackage.id);
      if (error) throw error;
      toast.success('Package updated successfully!');
      setEditingPackage(null);
    } catch (err) {
      console.error('Error updating package:', err);
      toast.error('Failed to update package');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deletingPackage) return;
    try {
      const { error } = await supabase
        .from('packages')
        .delete()
        .eq('id', deletingPackage.id);
      if (error) throw error;
      toast.success('Package deleted successfully!');
      setDeletingPackage(null);
    } catch (err) {
      console.error('Error deleting package:', err);
      toast.error('Failed to delete package');
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setLocationFilter('all');
    setStatusFilter('all');
  };

  const hasActiveFilters = searchQuery !== '' || categoryFilter !== 'all' || locationFilter !== 'all' || statusFilter !== 'all';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <PackageIcon className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            </div>
            <Button onClick={() => setIsFormOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Package
            </Button>
          </div>

          <div className="bg-card rounded-2xl border border-border p-6">
            {/* Search and Filters */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold text-foreground">Search & Filter</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search Input */}
                <div className="relative lg:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>

                {/* Category Filter */}
                <Select value={categoryFilter} onValueChange={(v: 'all' | 'domestic' | 'international') => {
                  setCategoryFilter(v);
                  setLocationFilter('all'); // Reset location when category changes
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="domestic">Domestic</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>

                {/* Location Filter */}
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="State/Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((loc) => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Status Filter */}
                <Select value={statusFilter} onValueChange={(v: 'all' | 'active' | 'inactive') => setStatusFilter(v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {hasActiveFilters && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {filteredPackages.length} of {packages.length} packages
                  </p>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-6">
              {loading ? (
                <div className="text-center py-12 text-muted-foreground">
                  Loading packages...
                </div>
              ) : error ? (
                <div className="text-center py-12 text-destructive">
                  Error: {error}
                </div>
              ) : (
                <PackagesTable
                  packages={filteredPackages}
                  onEdit={setEditingPackage}
                  onDelete={setDeletingPackage}
                  formatPrice={formatPrice}
                  formatDuration={formatDuration}
                  groupByLocation={!hasActiveFilters || (categoryFilter !== 'all' && locationFilter === 'all')}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Create Package Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Create New Package</DialogTitle>
          </DialogHeader>
          <PackageForm
            onSubmit={handleCreate}
            onCancel={() => setIsFormOpen(false)}
            isLoading={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Edit Package Dialog */}
      <Dialog open={!!editingPackage} onOpenChange={(open) => !open && setEditingPackage(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Package</DialogTitle>
          </DialogHeader>
          <PackageForm
            package={editingPackage}
            onSubmit={handleUpdate}
            onCancel={() => setEditingPackage(null)}
            isLoading={isSubmitting}
          />
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deletingPackage} onOpenChange={(open) => !open && setDeletingPackage(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Package</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deletingPackage?.name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Admin;
