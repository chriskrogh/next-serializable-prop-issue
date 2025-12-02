"use client";

type Props = {
  foo: () => void;
};

export function Client({ foo }: Props) {
  foo();
  return <div>Client</div>;
}
