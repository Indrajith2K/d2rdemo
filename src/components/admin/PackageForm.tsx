import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { X } from 'lucide-react';
import type { Package } from '@/hooks/usePackages';

interface PackageFormProps {
  package?: Package | null;
  onSubmit: (data: Omit<Package, 'id'>) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
}

const domesticStates = [
  'Kerala', 'Tamil Nadu', 'Karnataka', 'Goa', 'Hyderabad',
  'Delhi - Agra - Jaipur', 'Himachal Pradesh', 'Kashmir',
  'Northeast', 'Meghalaya', 'Andaman', 'Lakshadweep'
];

const internationalCountries = [
  'Thailand', 'Malaysia', 'Singapore', 'Bali', 'Dubai', 'Sri Lanka'
];

const PackageForm: React.FC<PackageFormProps> = ({ package: pkg, onSubmit, onCancel, isLoading }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    category: 'domestic' as 'domestic' | 'international',
    state_or_country: '',
    duration_days: 3,
    duration_nights: 2,
    price_per_person: 10000,
    quick_facts: [''] as string[],
    trip_speciality: '',
    image_url: '',
    rating: 4.5,
    is_active: true,
  });

  useEffect(() => {
    if (pkg) {
      setFormData({
        name: pkg.name,
        location: pkg.location,
        category: pkg.category as 'domestic' | 'international',
        state_or_country: pkg.state_or_country,
        duration_days: pkg.duration_days,
        duration_nights: pkg.duration_nights,
        price_per_person: pkg.price_per_person,
        quick_facts: pkg.quick_facts.length > 0 ? pkg.quick_facts : [''],
        trip_speciality: pkg.trip_speciality || '',
        image_url: pkg.image_url || '',
        rating: pkg.rating || 4.5,
        is_active: pkg.is_active,
      });
    }
  }, [pkg]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedFacts = formData.quick_facts.filter(fact => fact.trim() !== '');
    await onSubmit({
      ...formData,
      quick_facts: cleanedFacts,
      trip_speciality: formData.trip_speciality || null,
      image_url: formData.image_url || null,
    });
  };

  const addQuickFact = () => {
    setFormData(prev => ({
      ...prev,
      quick_facts: [...prev.quick_facts, '']
    }));
  };

  const removeQuickFact = (index: number) => {
    setFormData(prev => ({
      ...prev,
      quick_facts: prev.quick_facts.filter((_, i) => i !== index)
    }));
  };

  const updateQuickFact = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      quick_facts: prev.quick_facts.map((fact, i) => i === index ? value : fact)
    }));
  };

  const locationOptions = formData.category === 'domestic' ? domesticStates : internationalCountries;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Package Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Enter package name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            placeholder="e.g., Munnar, Alleppey"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value: 'domestic' | 'international') => 
              setFormData(prev => ({ ...prev, category: value, state_or_country: '' }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="domestic">Domestic</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="state_or_country">State/Country</Label>
          <Select
            value={formData.state_or_country}
            onValueChange={(value) => setFormData(prev => ({ ...prev, state_or_country: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select state/country" />
            </SelectTrigger>
            <SelectContent>
              {locationOptions.map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration_days">Duration (Days)</Label>
          <Input
            id="duration_days"
            type="number"
            min={1}
            value={formData.duration_days}
            onChange={(e) => setFormData(prev => ({ ...prev, duration_days: parseInt(e.target.value) || 1 }))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration_nights">Duration (Nights)</Label>
          <Input
            id="duration_nights"
            type="number"
            min={0}
            value={formData.duration_nights}
            onChange={(e) => setFormData(prev => ({ ...prev, duration_nights: parseInt(e.target.value) || 0 }))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price_per_person">Price per Person (₹)</Label>
          <Input
            id="price_per_person"
            type="number"
            min={0}
            value={formData.price_per_person}
            onChange={(e) => setFormData(prev => ({ ...prev, price_per_person: parseInt(e.target.value) || 0 }))}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            type="number"
            min={0}
            max={5}
            step={0.1}
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) || 0 }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          value={formData.image_url}
          onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="trip_speciality">Trip Speciality</Label>
        <Textarea
          id="trip_speciality"
          value={formData.trip_speciality}
          onChange={(e) => setFormData(prev => ({ ...prev, trip_speciality: e.target.value }))}
          placeholder="What makes this trip special?"
          rows={2}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Quick Facts</Label>
          <Button type="button" variant="outline" size="sm" onClick={addQuickFact}>
            Add Fact
          </Button>
        </div>
        <div className="space-y-2">
          {formData.quick_facts.map((fact, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={fact}
                onChange={(e) => updateQuickFact(index, e.target.value)}
                placeholder={`Quick fact ${index + 1}`}
              />
              {formData.quick_facts.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeQuickFact(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="is_active"
          checked={formData.is_active}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_active: checked }))}
        />
        <Label htmlFor="is_active">Active (visible on website)</Label>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : pkg ? 'Update Package' : 'Create Package'}
        </Button>
      </div>
    </form>
  );
};

export default PackageForm;
