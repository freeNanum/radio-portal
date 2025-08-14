export interface Station {
  id: number;
  name: string;
  url: string;
}

export const stations: Station[] = [
  {
    id: 1,
    name: 'KBS 라디오',
    url: 'https://radio.kbs.co.kr/',
  },
  {
    id: 2,
    name: 'MBC 라디오',
    url: 'https://www.imbc.com/broad/radio/index.html',
  },
  {
    id: 3,
    name: 'CBS 라디오',
    url: 'https://www.cbs.co.kr/radio/',
  },
  {
    id: 4,
    name: 'SBS 라디오',
    url: 'https://www.sbs.co.kr/ko/live?div=gnb_pc',
  },
  {
    id: 5,
    name: 'YTN 라디오',
    url: 'https://radio.ytn.co.kr/',
  },
  {
    id: 6,
    name: 'TBS 라디오',
    url: 'https://tbs.seoul.kr/fm/index.do',
  },
  {
    id: 7,
    name: 'OBS 라디오',
    url: 'https://www.obs.co.kr/radio/',
  },
];