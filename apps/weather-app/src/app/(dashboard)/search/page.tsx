import { InputSearch } from '@lib/ui/extended';

export default async function SearchLocationPage() {
  return <InputSearch action="/" searchParams={new URLSearchParams('')} />;
}
