import ButtonTileList from "@/app/UI/features/buttonui/ButtonTileList";
import CardBox from "@/app/UI/features/CardBox/CardBox";
import FeedbackBoost from "@/app/UI/features/FeedbackBoost/FeedbackBoost";
import HomeMainCards from "@/app/UI/features/HomeCard/HomeMainCards";
import ManageServices from "@/app/UI/features/ManageServices/ManageServices";


export default function page() {
  return (
    <>
      <div className="mx-16 me-40">
        <HomeMainCards />

        <CardBox />

        <ManageServices />

        <hr className="my-2" />

        <ButtonTileList />

        <hr className="my-2" />

        <FeedbackBoost />
      </div>
    </>
  );
}
