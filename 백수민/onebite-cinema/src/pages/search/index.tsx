import MovieItem from "@/components/movie-item";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import style from "./index.module.css";

const mockData = {
  id: 7,
  title: "원더",
  releaseDate: "2025-02-12",
  company:
    "CGV 아트하우스, CJ CGV, (주)키노라이츠, (주)스튜디오 디에이치엘, 그린나래미디어(주)",
  genres: ["드라마"],
  subTitle: "새로운 시작을 맞이하는 모두에게",
  description:
    "누구보다 위트 있고 호기심 많은 매력 부자 ‘어기'(제이콥 트렘블레이). 하지만 남들과 다른 외모로 태어난 ‘어기'는 모두가 좋아하는 크리스마스 대신 얼굴을 감출 수 있는 할로윈을 더 좋아한다. 10살이 된 아들에게 더 큰 세상을 보여주고 싶었던 엄마 ‘이사벨’(줄리아 로버츠)과 아빠 ‘네이트’(오웬 윌슨)는 ‘어기'를 학교에 보낼 준비를 하고, 동생에게 모든 것을 양보해왔지만 누구보다 그를 사랑하는 누나 ‘비아'도 ‘어기'의 첫걸음을 응원해준다. 그렇게 가족이 세상의 전부였던 ‘어기'는 처음으로 헬멧을 벗고 낯선 세상에 용감하게 첫발을 내딛지만 첫날부터 ‘남다른 외모'로 화제의 주인공이 되고, 사람들의 시선에 큰 상처를 받는다. 그러나 ‘어기'는 27번의 성형(?)수술을 견뎌낸 긍정적인 성격으로 다시 한번 용기를 내고, 주변 사람들도 하나둘 변하기 시작하는데...",
  runtime: 113,
  posterImgUrl:
    "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250123_251%2F1737605477501jJsWE_JPEG%2Fmovie_image.jpg",
};

export default function Page() {
  const {
    id,
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = mockData;
  return (
    <div className={style.container_searched_movies}>
      <MovieItem key={id} {...mockData} />
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
