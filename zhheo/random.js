var posts=["2022/11/18/1118/","2022/11/19/20221119日记/","2022/11/19/cloudflare自选ip/","2022/09/26/markdown/","2022/09/26/test/","2022/11/18/免备案/","2022/11/22/1/","2022/11/22/20221121/","2022/11/23/2022112301/","2022/11/23/2022112302/","2022/11/30/30/","2022/11/21/git/","2022/11/21/note_yuwen_1121/","2022/11/22/post/","2022/11/22/vercel不知怎么了最近老是不稳定/","2022/11/23/vercel又出问题了/","2022/12/09/上传博客到npm，并分流到npm镜像提升速度/","2022/12/04/使用多方法给hexo加速/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};