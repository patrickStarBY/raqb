export enum DataType {
  integer = 'integer',
  string = 'string',
  boolean = 'boolean',
  stringSelectize = 'string_selectize',
  date = 'date',
  dateNow = 'date_now',
  handbookItem = 'handbook_item',
  afishaCity = 'afisha_city',
  afishaTag = 'afisha_tag',
  afishaEvent = 'afisha_event',
  cryptaSegments = 'crypta_segments',
  musicGenre = 'music_genre',
  musicGenreCode = 'music_genre_code',
  musicGenreId = 'music_genre_id',
  spam = 'spam',
  spamType = 'spam_type',
  double = 'double',
  gender = 'gender',
}

export type SelectizeData = {
  id: string;
  name: string;
};

export type HandbookData = {
  id: string;
  name: string;
};

export type AfishaData = {
  id: string;
  name: string;
};

export type SpamData = {
  id: string;
  name: string;
};

export type DefaultData = SelectizeData | HandbookData | AfishaData | SpamData;
