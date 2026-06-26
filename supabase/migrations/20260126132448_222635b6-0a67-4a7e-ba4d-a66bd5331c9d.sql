
-- Create packages table for storing all travel packages
CREATE TABLE public.packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('domestic', 'international')),
  state_or_country TEXT NOT NULL,
  duration_days INTEGER NOT NULL,
  duration_nights INTEGER NOT NULL,
  price_per_person INTEGER NOT NULL,
  quick_facts TEXT[] NOT NULL DEFAULT '{}',
  trip_speciality TEXT,
  image_url TEXT,
  rating DECIMAL(2,1) DEFAULT 4.5,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no auth required)
CREATE POLICY "Anyone can view packages" 
ON public.packages 
FOR SELECT 
USING (true);

-- Create index for faster queries
CREATE INDEX idx_packages_category ON public.packages(category);
CREATE INDEX idx_packages_state_country ON public.packages(state_or_country);
CREATE INDEX idx_packages_active ON public.packages(is_active);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_packages_updated_at
BEFORE UPDATE ON public.packages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
