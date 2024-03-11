export interface ContainerCenteredProps {
  children: React.ReactNode;
}

export function ContainerCentered(props: ContainerCenteredProps) {
  return (
    <div className="flex w-full h-full justify-center items-center">
      {props.children}
    </div>
  );
}

export default ContainerCentered;
