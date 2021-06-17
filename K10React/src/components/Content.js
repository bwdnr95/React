import React ,{Component} from "react";

class Content extends Component{
    /*
    props는 컴포넌트 추가시 HTML의 속성처럼 추가하는 부분으로
    사용할때는 "this.props.속성명" 으로 기술하면 된다.
    */
    render(){
      return(
        <article>
          <h2>${this.props.title}</h2>
          ${this.props.desc}
        </article>
      );
    }
  }
  export default Content