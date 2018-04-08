# 效果图
![效果图](https://upload-images.jianshu.io/upload_images/10518780-9edd069104cb3fef.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- gif放不上来。。我就直接口述了。。
- 首先左右滑动的时候整个页面会以动画效果切换（demo里是反转和水平淡出）
- 然后那个红色的小心心是点赞之后的状态，过程也是动画
- 划重点--大家一定用过animate.css，微信小程序里可以用ripples.wxss来代替，具体怎么用，取决于你

# 思路
- 滑动 根据滑动角度判断滑动方向 然后决定显示哪个页面
- 点赞 每个页面的点赞都对应他自己的数据里的标志值 一次来分别控制小心心 

# 结语
其实我只是喜欢这个页面而已。。
