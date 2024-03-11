export interface IconArrowRightProps {
  alt: string;
  width: number;
  color?: string;
}

export function IconArrowRight(props: IconArrowRightProps) {
  return (
    <svg
      width="23"
      height="19"
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8C1.17157 8 0.5 8.67157 0.5 9.5C0.5 10.3284 1.17157 11 2 11V8ZM2 11H20.5V8H2V11Z"
        fill="#111111"
      />
      <path
        d="M13 2L20.5 9.5L13 17"
        stroke="#111111"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IconArrowRight;
