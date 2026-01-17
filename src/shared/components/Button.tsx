import clsx from 'clsx';

type ButtonColor = 'black' | 'blue' | 'red';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  active?: boolean;
}

const BUTTON_STYLE = {
  black: {
    active: 'bg-[#1B2334] text-white',
    inactive: 'text-[#1B2334]',
  },
  blue: {
    active: 'bg-[#3479EB] text-white',
    inactive: 'text-[#9DB6FF]',
  },
  red: {
    active: 'bg-[#FE5050] text-white',
    inactive: 'text-[#FFA7A7]',
  },
} as const;

export const Button = ({ color = 'black', active = true, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'px-3 py-2 font-bold rounded-xl transition-colors cursor-pointer',
        BUTTON_STYLE[color][active ? 'active' : 'inactive'],
        className,
      )}
    />
  );
};
