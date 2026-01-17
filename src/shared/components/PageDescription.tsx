interface Props {
  title: string;
  description?: string;
}

export const PageDescription = ({ title, description }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
