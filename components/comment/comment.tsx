import { useState, useRef, useEffect } from "react";
import Action from "./action";
import DownArrow from '@/assets/down-arrow.svg'
import UpArrow from "@/assets/up-arrow.svg";
import { WrapperCommnet } from "./comment-styled";
import Reply from '@/assets/reply.png'
import SendIcon from '@/assets/paper-plane.png'
import moment from "moment";
import { DislikeFilled, DislikeOutlined, InfoCircleOutlined, LikeFilled, LikeOutlined, SortDescendingOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { selectUser } from "@/features/user-slice";
import { useAppSelector } from "@/app/hook";
import { Truculenta } from "@next/font/google";
type TCommnetProps = {
    handleInsertNode: any,
    handleEditNode: any,
    handleDeleteNode: any,
    handleReaction: any,
    comment: any
}
const viLocale: any = {
    months: 'Tháng 1_Tháng 2_Tháng 3_Tháng 4_Tháng 5_Tháng 6_Tháng 7_Tháng 8_Tháng 9_Tháng 10_Tháng 11_Tháng 12'.split('_'),
    monthsShort: 'Th1_Th2_Th3_Th4_Th5_Th6_Th7_Th8_Th9_Th10_Th11_Th12'.split('_'),
    weekdays: 'Chủ nhật_Thứ hai_Thứ ba_Thứ tư_Thứ năm_Thứ sáu_Thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Hôm nay] LT',
        nextDay: '[Ngày mai] LT',
        nextWeek: 'dddd [tuần tới] LT',
        lastDay: '[Hôm qua] LT',
        lastWeek: 'dddd [tuần trước] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sau',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
    },
    dayOfMonthOrdinalParse: /\d{1,2}/,
    ordinal: function (number: number) {
        return number;
    },
    meridiemParse: /sa|ch/i,
    isPM: function (input: any) {
        return /^ch$/i.test(input);
    },
    meridiem: function (hour: any, minute: any, isLowercase: any) {
        if (hour < 12) {
            return 'SA';
        } else {
            return 'CH';
        }
    },
    week: {
        dow: 1, // Thứ hai là ngày đầu tuần
        doy: 4  // Tuần chứa ngày đầu tiên của năm là tuần thứ 4
    }
};
export const Comment = (props: TCommnetProps) => {
    const { comment, handleDeleteNode, handleEditNode, handleReaction, handleInsertNode } = props;

    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(true);
    const inputRef: any = useRef(null);
    const { loginInfo } = useAppSelector(selectUser)

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => {
        if (!expand) setExpand(true)
        setShowInput(true);
    };
    const hanleExpand = () => {
        setExpand(!expand);
    };

    const onAddComment = (parentId: number | null) => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input, parentId);
            setShowInput(false);
            setInput("");
        }

        if (editMode) setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    };

    const convertTime = (time: any) => {
        if (time) {
            return moment(time).format("HH:mm DD/MM/YYYY")
        } else {
            return ""
        }
    }

    const cacuTime = (time: any) => {
        moment.locale('vi', viLocale)

        const timeAgo = moment(time).fromNow();
        return timeAgo;
    }

    const reaction = (comment: any, type: string) => {
        handleReaction(comment.id, type);
    }

    const checkIsLike = (lst: any) => {
        if (lst) {
            var newlst = lst.split(',');
            if (newlst.find((x: any) => x == loginInfo.payload.profilesID)) {
                return true;
            }
        }
        return false;
    }

    return (
        <WrapperCommnet>
            <div className={comment.id === 'root' ? "inputContainer" : "commentContainer"}>
                {comment.id === 'root' && loginInfo ? (
                    <div className="nodeParent">
                        <img src="https://s1.narvii.com/image/oj7hhzmuk5nwiakz7fso3meq34q2fnib_hq.jpg" width={'30px'} height={'30px'} alt="" />
                        <Input
                            className="inputContainer__input first_input"
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="type..."
                            onKeyDown={(e) => {
                                if (e.key == "Enter" && input) {
                                    onAddComment(null)
                                }
                            }}

                            suffix={
                                <Tooltip >
                                    <img src={SendIcon.src} onClick={() => { onAddComment(null) }} alt="" style={{ pointerEvents: `${input ? 'all' : 'none'}` }} />
                                </Tooltip>
                            }
                        />

                    </div>
                ) : (
                    <>
                        <div className="header_content">
                            <div className="header_name">
                                <img src="https://s1.narvii.com/image/oj7hhzmuk5nwiakz7fso3meq34q2fnib_hq.jpg" width={'30px'} height={'30px'} alt="" />
                                <h4>William Oslen</h4>
                                <p>{cacuTime(comment?.createdTime)}</p>
                            </div>
                            <div>{convertTime(comment?.createdTime)}</div>


                        </div>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                            ref={inputRef}
                            style={{ wordWrap: "break-word", padding: '4px' }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && e.shiftKey) {
                                    e.preventDefault();
                                    const input = inputRef.current;
                                    const currentText = input.textContent.trim();
                                    input.textContent = `${currentText}\n`;
                                } else if (e.key == "Enter") {
                                    onAddComment(null)
                                }
                            }}
                        >
                            {comment.content}
                        </span>

                        <div style={{ display: "flex", marginTop: "5px" }}>
                            {editMode ? (
                                <>
                                    <Action
                                        className="reply"
                                        hidden={false}
                                        type="Lưu"
                                        handleClick={onAddComment}
                                    />
                                    <Action
                                        className="reply"
                                        hidden={false}
                                        type="Hủy"
                                        handleClick={() => {
                                            if (inputRef.current)
                                                inputRef.current.innerText = comment.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <div className="wrapp_action">
                                    <div className="action_left">

                                        {comment && comment?.comments.length > 0 ? <div>{expand ? (
                                            // <svg fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" /></svg>
                                            <p onClick={hanleExpand}>Ẩn bớt</p>
                                        ) : (
                                            // <svg fill="#000000" width="10px" height="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" /></svg>
                                            <p onClick={hanleExpand}>Xem thêm</p>
                                        )}</div> : null}
                                        <Action
                                            className="reply"
                                            type={
                                                <>
                                                    <img style={{ marginLeft: '8px' }} src={Reply.src} width="14px" height="14px" alt="" />
                                                </>
                                            }
                                            hidden={false}
                                            handleClick={handleNewComment}
                                        />
                                        <Action
                                            className="reply"
                                            type="Sửa"
                                            hidden={loginInfo && loginInfo.payload && loginInfo.payload.profilesID == comment.userId ? false : true}
                                            handleClick={() => {
                                                setEditMode(true);
                                            }}
                                        />
                                        <Action
                                            className="reply"
                                            type="Xóa"
                                            hidden={loginInfo && loginInfo.payload && loginInfo.payload.profilesID == comment.userId ? false : true}
                                            handleClick={handleDelete}
                                        />
                                    </div>
                                    <div className="action_right">
                                        <p>{comment.isLiked && checkIsLike(comment.listUserLiked) ? <LikeFilled onClick={() => {
                                            reaction(comment, 'like')
                                        }} style={{ color: 'blue', fontSize: '16px' }} /> : <LikeOutlined onClick={() => {
                                            reaction(comment, 'like')
                                        }} style={{ fontSize: '16px' }} />}{comment.numberOfLike}</p>
                                        <p>{comment.isDisLiked && checkIsLike(comment.listUserLiked) ? <DislikeFilled onClick={() => {
                                            reaction(comment, 'disLike')
                                        }} style={{ color: 'blue', fontSize: '16px' }} /> : <DislikeOutlined onClick={() => {
                                            reaction(comment, 'disLike')
                                        }} style={{ fontSize: '16px' }} />}{comment.numberOfDisLike}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                {showInput && (
                    <div className="inputContainer">
                        <input
                            type="text"
                            className="inputContainer__input"
                            autoFocus
                            onChange={(e) => setInput(e.target.value)}

                        />
                        <Action className="reply" type="Gửi" handleClick={() => { onAddComment(comment.id) }} hidden={false} />
                        <Action
                            className="reply"
                            type="Hủy"
                            hidden={false}
                            handleClick={() => {
                                setShowInput(false);
                                if (!comment?.comments?.length) setExpand(false);
                            }}
                        />
                    </div>
                )}

                {comment?.comments?.map((cmnt: any) => {
                    return (
                        <Comment
                            key={cmnt.id}
                            handleInsertNode={handleInsertNode}
                            handleEditNode={handleEditNode}
                            handleDeleteNode={handleDeleteNode}
                            comment={cmnt}
                            handleReaction={handleReaction}
                        />
                    );
                })}
            </div>
        </WrapperCommnet>
    );
};
