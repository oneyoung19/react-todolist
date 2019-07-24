react学习笔记
==
## 1.props传递事件
![事件传递代码描述](public/assets/images/1563949444194.jpg)
![事件传递错误信息](public/assets/images/1563951201801.jpg)

提示没有写onChange处理器，但是我确实写了。具体原因还不清楚。

错误之处有两种改写方法：

    onChange={(e) => change(e.target.value)}

    onChange={this.handleChange}
    handleChange (e) {
      this.props.change(e.target.value)
    }

