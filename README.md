# mpvue-example

## 1. ��������
```
npm install -g vue-cli
vue init mpvue/mpvue-quickstart mpvue-example
cd mpvue-example
npm install
npm run dev
```

��Ŀ��������΢�ſ����߹���ָ�� mpvue-example Ŀ¼




## 2. vue ��������


## 3. �����ҳ��

���� src/pages/logs �� src/pages/test-page

�޸� index.vue ���ݣ�Ȼ���� src/main.js ��ע����ҳ��

�� src/pages/index/index.vue ��дһ�����ӣ�ת���µ�ҳ��

``` html
<a href="/pages/test-page/main" class="counter">ȥ�� test-page</a>
```

�����ҳ�����Ҫ��������

```
npm run dev
```

�����Ŀ������ eslint �﷨��飬�ȹر�����Ӱ�����Ԥ����

�޸� build/webpack.base.conf.js������� eslint-loader ע�͵���

``` js
rules: [
//      {
//        test: /\.(js|vue)$/,
//        loader: 'eslint-loader',
//        enforce: 'pre',
//        include: [resolve('src'), resolve('test')],
//        options: {
//          formatter: require('eslint-friendly-formatter')
//        }
//      },
```


## 4. ������������

ʹ��weui��ԭ��ϣ��ͨ�����������а�װ weui���� import ��������벻�ɹ�

```
npm install weui --save   ����
```

��ʹ��������Ŀ

https://github.com/KuangPF/mpvue-weui

```
git clone --depth=1 https://github.com/KuangPF/mpvue-weui
```

��¡�󣬽� static ��������ĿĿ¼��Ȼ�� import

main.js
```
import './css/app.css'
import '../static/weui/weui.css'
```

Ȼ�󿽱�������ҳ����ʹ��

mpvue-weui �����Ŀ��û�з�װ�����ֻ�������� weui ����ʽ��

mpvue-weui 
```
��������С������ʹ�ã����Ǿ�ֱ��ʹ���� weiui-wxss �е���ʽ�ļ�, �ٷ��ṩ����weui.wxss, ����ֶ�ת����weui.css, Ȼ�����뼴�ɡ�
```



## 5. ʹ�� json-server �һ�� mock ������


