-- Add RLS policies for admin package management
-- Note: In production, these should be restricted to authenticated admin users

CREATE POLICY "Allow insert packages"
ON public.packages
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow update packages"
ON public.packages
FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow delete packages"
ON public.packages
FOR DELETE
USING (true);