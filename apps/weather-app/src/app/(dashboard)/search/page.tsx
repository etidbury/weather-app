import { InputSearch } from '@lib/ui/extended';

export default async function SearchLocationPage(props: {
  searchParams: URLSearchParams;
}) {
  return (
    <InputSearch
      action="/"
      searchParams={new URLSearchParams(props.searchParams)}
    />
  );
}
