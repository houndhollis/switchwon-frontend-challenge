import { toast } from 'sonner';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

export const useToast = () => {
  const showToast = ({
    title,
    description,
    type = 'info',
  }: {
    title: string;
    description?: string;
    type?: ToastType;
  }) => {
    const icons = {
      success: <CheckCircle2 size={20} className="text-green-500" />,
      error: <AlertTriangle size={20} className="text-red-500" />,
      info: <Info size={20} className="text-blue-500" />,
    };

    toast(title, {
      description,
      icon: icons[type],
    });
  };

  return { showToast };
};
