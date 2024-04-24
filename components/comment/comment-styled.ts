import styled from "styled-components";



export const CommentContainer = styled.div`
    width: 100%;
`

export const WrapperCommnet = styled.div`
    width: 100%;
    .nodeParent{
    width: 100%;
  display: flex;
        align-items:center;
    }
    .header_content{
        display: flex;
        align-items:center;
        justify-content:space-between;
        .header_name{
            img{
                clip-path: circle();
            }
            display: flex;
            align-items:center;
            gap: 8px;
            p{
                font-size:10px
            }
        }
    }
.commentContainer {
    margin-top: 6px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    width: 100%;
    cursor: pointer;
    border-radius: 5px;
}
.commentContainer:hover {
    background-color: #d3d3d3bf;
}

.inputContainer {
    display: flex;
    align-items: baseline;
    gap: 5px;
    width: 100%;
    input{
    width: 100%;

    }
}
.inputContainer>span {
    margin-top: 5px;
}

/* .inputContainer__input {
    margin: 6px 0 0px 0;
    padding: 5px;
    display: flex;
    border: 1px solid lightgray;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 5px;
    background-color: #e7e7e7;
} */
.inputcomment{
    position: relative;
    display: inline-flex;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: #d9d9d9;
    border-radius: 6px;
    transition: all 0.2s;
}
.inputcomment:hover {
  border-color: #40a9ff;
}

.inputcomment:focus,
.inputcomment-focused {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.inputcomment-disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.inputcomment-disabled:hover {
  border-color: #d9d9d9;
}

.inputcomment-disabled::placeholder {
  color: rgba(0, 0, 0, 0.25);
}

.inputcomment-lg {
  height: 40px;
  padding: 6px 11px;
  font-size: 16px;
}

.inputcomment-sm {
  height: 24px;
  padding: 1px 7px;
  font-size: 12px;
}
.first_input {
    margin: 0;
}

.commentContainer>span {
    margin: 0 5px;
}

.reply {
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    color: #4e4e4e;
    font-weight: 600;
    cursor: pointer;
}

.comment {
    color: #ffffff;
    background-color: #569dff;
    letter-spacing: 0.8px;
}
.wrapp_action{
    width:100%;
    display: flex;
    align-items:center;
    justify-content:space-between;
    .action_left{
        display: flex;
    align-items:center;
    p{
        font-size:12px;
        font-weight:600;
    }
    }
    .action_right{
        display: flex;
    align-items:center;
    gap: 12px;
    }
}
`