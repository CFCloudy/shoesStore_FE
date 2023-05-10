import { FastBackwardOutlined, FastForwardOutlined, StepBackwardOutlined, StepForwardOutlined } from "@ant-design/icons"
import { WrapPaging } from "./paging-styled"

export const Paging=()=>{


    return (
        <WrapPaging>
            <div className="prev"><FastBackwardOutlined /></div>
            <div className="prev"><StepBackwardOutlined /></div>
            <div className="page">
                <li>1</li>
                <li>2</li>
                <li>...</li>
                <li>9</li>
                <li>10</li>
            </div>
            <div className="prev"><StepForwardOutlined /></div>
            <div className="prev"><FastForwardOutlined /></div>
        </WrapPaging>
    )
}