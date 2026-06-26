import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, Star } from 'lucide-react';
import type { Package } from '@/hooks/usePackages';

interface PackagesTableProps {
  packages: Package[];
  onEdit: (pkg: Package) => void;
  onDelete: (pkg: Package) => void;
  formatPrice: (price: number) => string;
  formatDuration: (days: number, nights: number) => string;
  groupByLocation?: boolean;
}

const PackagesTable: React.FC<PackagesTableProps> = ({
  packages,
  onEdit,
  onDelete,
  formatPrice,
  formatDuration,
  groupByLocation = true,
}) => {
  if (packages.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No packages found.
      </div>
    );
  }

  // Group packages by category and state/country
  const groupedPackages = packages.reduce((acc, pkg) => {
    const key = `${pkg.category}|${pkg.state_or_country}`;
    if (!acc[key]) {
      acc[key] = {
        category: pkg.category,
        stateOrCountry: pkg.state_or_country,
        packages: [],
      };
    }
    acc[key].packages.push(pkg);
    return acc;
  }, {} as Record<string, { category: string; stateOrCountry: string; packages: Package[] }>);

  // Sort groups: domestic first, then alphabetically by state/country
  const sortedGroups = Object.values(groupedPackages).sort((a, b) => {
    if (a.category !== b.category) {
      return a.category === 'domestic' ? -1 : 1;
    }
    return a.stateOrCountry.localeCompare(b.stateOrCountry);
  });

  const renderPackageRow = (pkg: Package) => (
    <TableRow key={pkg.id}>
      <TableCell className="font-medium">{pkg.name}</TableCell>
      <TableCell>{pkg.location}</TableCell>
      <TableCell>{formatDuration(pkg.duration_days, pkg.duration_nights)}</TableCell>
      <TableCell>{formatPrice(pkg.price_per_person)}</TableCell>
      <TableCell>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-primary text-primary" />
          <span>{pkg.rating?.toFixed(1) || 'N/A'}</span>
        </div>
      </TableCell>
      <TableCell>
        <Badge variant={pkg.is_active ? 'default' : 'outline'}>
          {pkg.is_active ? 'Active' : 'Inactive'}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(pkg)}
            title="Edit package"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(pkg)}
            className="text-destructive hover:text-destructive"
            title="Delete package"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );

  if (!groupByLocation) {
    return (
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map(renderPackageRow)}
          </TableBody>
        </Table>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sortedGroups.map((group) => (
        <div key={`${group.category}-${group.stateOrCountry}`} className="space-y-2">
          <div className="flex items-center gap-2 sticky top-0 bg-card py-2 z-10">
            <Badge variant={group.category === 'domestic' ? 'default' : 'secondary'} className="text-xs">
              {group.category}
            </Badge>
            <h3 className="text-lg font-semibold text-foreground">
              {group.stateOrCountry}
            </h3>
            <span className="text-sm text-muted-foreground">
              ({group.packages.length} package{group.packages.length !== 1 ? 's' : ''})
            </span>
          </div>
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.packages.map(renderPackageRow)}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesTable;
