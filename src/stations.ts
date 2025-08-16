// Copyright (c) 2024 Jaehong Park
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export interface Station {
  id: number;
  name: string;
  url: string;
  logoUrl: string;
  bgColor: string;
}

export const stations: Station[] = [
  {
    id: 1,
    name: 'KBS 라디오',
    url: 'https://radio.kbs.co.kr/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/KBS_Radio_1_logo.svg/1200px-KBS_Radio_1_logo.svg.png',
    bgColor: '#FF0000',
  },
  {
    id: 2,
    name: 'MBC 라디오',
    url: 'https://www.imbc.com/broad/radio/index.html',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/MBC_Radio_2018.svg/184px-MBC_Radio_2018.svg.png',
    bgColor: '#FFA500',
  },
  {
    id: 3,
    name: 'CBS 라디오',
    url: 'https://www.cbs.co.kr/radio/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/CBS_Radio_logo.png/850px-CBS_Radio_logo.png',
    bgColor: '#FFFF00',
  },
  {
    id: 4,
    name: 'SBS 라디오',
    url: 'https://www.sbs.co.kr/ko/live?div=gnb_pc',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/SBS_Radio_logo.svg/250px-SBS_Radio_logo.svg.png',
    bgColor: '#008000',
  },
  {
    id: 5,
    name: 'YTN 라디오',
    url: 'https://radio.ytn.co.kr/',
    logoUrl: 'https://namu.wiki/raw/file:YTN_%EB%9D%BC%EB%94%94%EC%98%A4.png',
    bgColor: '#0000FF',
  },
  {
    id: 6,
    name: 'TBS 라디오',
    url: 'https://tbs.seoul.kr/fm/index.do',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/TBS_Radio_2020_logo.svg/538px-TBS_Radio_2020_logo.svg.png',
    bgColor: '#4B0082',
  },
  {
    id: 7,
    name: 'OBS 라디오',
    url: 'https://www.obs.co.kr/radio/',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/OBS-Logo.JPG/220px-OBS-Logo.JPG',
    bgColor: '#EE82EE',
  },
  {
    id: 8,
    name: '아리랑 라디오',
    url: 'https://www.arirang.com/radio?lang=ko',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/OBS-Logo.JPG/220px-OBS-Logo.JPG',
    bgColor: '#ADD8E6',
  },
];
