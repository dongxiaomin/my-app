import React from 'react';
import './Task.less';
import { Button, Popconfirm, Table, Tag, Modal } from 'antd';

const formatTime = function formatTime(time, template) {
    try {
        if (time == null) time = new Date().toLocaleString('zh-CN', { hour12: false })
        if (typeof template !== "string") template = "{0}/{1}/{2} {3}:{4}:{5}"
        let arr = []
        if (/^\d{8}$/.test(time)) {
            let [, $1, $2, $3] = /^(\d{4})(\d{2})(\d{2})$/.exec(time)
            arr.push($1, $2, $3)
        } else {
            arr = time.match(/\d+/g)
        }
        return template.replace(/\{(\d+)\}/g, (_, $1) => {
            let item = arr[$1] || "00"
            if (item.length < 2) item = "0" + item
            return item
        })
    } catch (_) {
        return ''
    }
}

class Task extends React.Component {
    columns = [
        {
            title: '编号',
            dataIndex: 'id',
        },
        {
            title: '任务描述',
            dataIndex: 'task',
        },
        {
            title: '状态',
            dataIndex: 'state',
            // render: (text, record) => {
            //     return text===1 ? '未完成' : '已完成'
            // }
            render: text => +text === 1 ? '未完成' : '已完成'
        },
        {
            title: '完成时间',
            dataIndex: 'time',
            render: (_, record) => {
                let { state, time, complete } = record;
                if (+state === 2) time = complete;
                return formatTime(time, '{1}/{2} {3}:{4}')
            }
        },
        {
            title: '操作',
            // dataIndex: 'complete'
            render: (_, record) => {
                let { state } = record;
                return <>
                    <Popconfirm title='您确定要删除此任务吗' onConfirm={() => { }}>
                        <Button type='link'>删除</Button>
                    </Popconfirm>

                    {+state === 1 ?
                        <Popconfirm title='您确定完成此任务吗'>
                            <Button type='link'>完成</Button>
                        </Popconfirm> : null}
                </>
            },

        }
    ];

    state = {
        tableData: [
            {
                id: 1,
                task: '天气明朗',
                state: 1,
                time: '2023-06-16',
                complete: '2023-06-17',
            },
            {
                id: 2,
                task: '天气..',
                state: 2,
                time: '2023-06-17',
                complete: '2023-06-18',
            }
        ],
        tableLoading: false,
        modalVisible: false,
        confirmLoading: false,
    }

    render() {
        let { tableData, tableLoading, modalVisible, confirmLoading } = this.state;
        return <div className='task-box'>
            <div className='header'>
                <h1 className='title'>Task OA系统</h1>
                <Button type='primary' onClick={() => {
                    this.setState({
                        modalVisible: true
                    })
                }}>新建</Button>
            </div>

            <div className='tag-box'>
                <Tag>全部</Tag>
                <Tag>未完成</Tag>
                <Tag>已完成</Tag>
            </div>

            <Table dataSource={tableData}
                columns={this.columns}
                loading={tableLoading}
                pagination={false}
                rowKey='id'
            >
            </Table>

            <Modal 
                title='新增任务窗口' 
                open={modalVisible} 
                confirmLoading={confirmLoading}
                

            ></Modal>
        </div>
    }
}

export default Task;
