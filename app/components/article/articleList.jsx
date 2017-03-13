/**
 * Created by myao on 17/3/13.
 */
import React from 'react'
import './articleList.less'
import 'whatwg-fetch'
import  session from '../../servers/session.jsx'

class ArticleList extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: session.get("userId"),
            datas: []
        };
        this.articleDetail = this.articleDetail.bind(this)
    }

    articleDetail(id) {
        console.log(id)
    }


    componentDidMount() {
        var _this = this;
        fetch("/rest/admin/getArticleList?userId=" + _this.state.userId,
            {
                method: "GET",
                headers: {access_token: session.get("access_token")}
            })
            .then(function (response) {
                response.json().then(function (data) {
                    if (data.key != 200) {
                        alert(data.str)
                    } else {
                        _this.setState({datas: data.data});
                        console.log(_this.state.datas);
                    }
                })
            });
    }


    render() {
        var that = this;
        //var items = [];
        //for (var i = 0; i<this.state.datas.length;i++) {
        //    items.push( <li id={this.state.datas[i]._id} onClick={this.articleDetail(this.state.datas[i]._id)}>
        //        <a>
        //            <h3 className="articleTitle">{this.state.datas[i].title}</h3>
        //            <div className="articleContent">
        //                <span>
        //                                <img className="smallHead" src={require("../../assets/images/smallHead.png")} alt="" width="18"/>
        //                            </span>
        //                <span className="time">published a year ago</span>
        //                </div>
        //            </a>
        //        </li>);
        //}
        return (
            <div className="ArticleList">
                <div className="top">
                    <span className="addBtn">新建帖子</span>
                </div>
                <div className="showPost clear">
                    <div className="list pull-left">
                        <ul>
                            {this.state.datas.map(function (item) {
                                return <li id={item._id} onClick={that.articleDetail(item._id)}>
                                    <a>
                                        <h3 className="articleTitle">{item.title}</h3>
                                        <div className="articleContent">
                                <span>
                                <img className="smallHead" src={require("../../assets/images/smallHead.png")} alt=""
                                     width="18"/>
                                </span>
                                            <span className="time">published a year ago</span>
                                        </div>
                                    </a>
                                </li>
                            }.bind(this))}
                        </ul>
                    </div>
                    <div className="showList pull-right">
                        <span className="editIcon icon icon-add"></span>
                        <div className="articleShow"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export {ArticleList};