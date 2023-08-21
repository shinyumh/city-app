import "./time.css"

const CurrentTime = ({data}) => {
    // console.log(data.timeresponse.data);
    // const timezone = data.timeresponse.data.slice(31,32)
    const infoarr = data.timeresponse.data.split("T");
    const time = infoarr[1].slice(0,5);
    let hour = 0;
    let mm = "";
    if (parseInt(time.slice(0,2)) > 12) {
        hour = parseInt(time.slice(0,2)) - 12;
        mm = "PM";
    } else {
        if (parseInt(time.slice(0,2)) == 0){
            hour = 12;
        } else {
            hour = parseInt(time.slice(0,2));
        }
        mm = "AM";
    }

    // let zone = ""
    // if (timezone == "4"){
    //     zone = "EST";
    // } else if (timezone == "5"){
    //     zone = "CST";
    // } else if (timezone == "6"){
    //     zone = "MST";
    // } else if (timezone == "7"){
    //     zone = "PST";
    // } else if (timezone == "8"){
    //     zone = "AKST";
    // } else {
    //     zone = "HST";
    // }
        
    return (
        <div className="time">
            {/* <p>Local Time (at time of search): </p> */}
            <p className="display">{infoarr[0] + " "} <b>{hour.toString() + time.slice(2,5) + " " + mm} </b>
            &nbsp;&nbsp;<small><small><small><i>local time at time of search</i></small></small></small></p>
        </div>
    )
}

export default CurrentTime;