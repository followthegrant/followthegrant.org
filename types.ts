export type Story = {
  readonly show: string;
  readonly date: string;
  readonly publisher: string;
  readonly url: string;
  readonly title: string;
  readonly language: string;
  readonly image_url?: string;
};

export type Award = {
  readonly year: string;
  readonly name: string;
  readonly organization: string;
  readonly title: string;
  readonly category: string;
  readonly url: string;
};
