type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="flex flex-col flex-grow">{children}</div>;
};

export default Container;
