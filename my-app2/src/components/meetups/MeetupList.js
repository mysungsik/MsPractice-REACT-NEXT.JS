import classes from "./MeetupList.module.css";
import MeetupItems from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => ( 
      <MeetupItems
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          key={meetup.id}
          id={meetup.id}
        />
      ))}

      {/*  "MeetupList"를 "외부에서 사용할 곳에서 MeetupList를 불러올때(meetups 이란 동적 값 이름을 사용하여)",
            적절한 동적 값(+ 배열 안에 객체가 들은 값 )을 넣으면,

        "MeetupList 안에 있는 map() 이 실행"되는데, "각 배열 요소마다, <MeetupItems> 를 불러오고", 그 안의 동적 값에는

        외부에서 "받아온 배열"의 "각 객체요소"의 "값"( 키가 "image","title","address","description" 인) 을 map() 에 의하여 넣게된다.

        ==>>> 

          [외부의 동적 배열값] =>  [MeetupList 에 map() 에 의해, 각 배열의 "객체 요소(값)"가 <MeetupItems> 안에 동적으로 전달되며]

          => [ react의 "동적 리스트 만드는 방식" {[ ]} 에 의해, "리스트가 만들어짐"]

        ==>>> 
          외부에서 들어오는 객체가 담긴 배열은

          [
            {
            id:"..." ,
            title:"..." ,
            address:"...",
            description:""
            },
            {
            id:"..." ,
            title:"..." ,
            address:"...",
            description:""
            }
          ]
          이런 식일것이다.

        ==>>>
          ** 리스트를 만드는 {[ ]} 를 사용할때는 반드시 유니크한 값을 가진 key={} 를 넣도록하고,
             어딘가에 쓰일지 모르는 id 도 넣어주도록 한다.
          ** 정작 MeetupItems 안에는 {props.id} 처럼 동적으로 쓰일 id 칸이 없지만, 그럼에도 불구하고 외부에서 넣어줄 수 있다.
              쓰이지 않더라도, 데이터를 넣어 줄 수 있는것이다. 나중에 쓰일지도 모르니까! 
        
    */}
    </ul>
  );
}

export default MeetupList;
