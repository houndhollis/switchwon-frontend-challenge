import { Loader2 } from 'lucide-react';

export const AppInitLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center text-muted-foreground">
      <Loader2 className="h-10 w-10 animate-spin text-stone-300" />
    </div>
  );
};
