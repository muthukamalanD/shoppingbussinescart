import { Rating } from "@material-ui/lab";

export default function RatingStar({ star }) {
  return (
    <>
      <Rating
        name={star}
        defaultValue={5}
        size="small"
        onChange={(e) => console.log(e.target)}
        style={{ display: "flex", justifyContent: "center" }}
      />
    </>
  );
}
