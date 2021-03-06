import {
	GET_TOPIC_LIST,
	CLEAR_TOPIC_LIST,
	GET_TOPIC_INFO,
	GET_COLLECT_TOPIC,
	ADMIRE_SUCCESS,
	SHOW_REPLY_MODAL,
	HIDE_REPLY_MODAL
} from "../constants/topic";

const TOPIC_STATE = {
	page: 1,
	limit: 20,
	// list: [
	// 		{
	// 			id: "5bd4772a14e994202cd5bdb7",
	// 			author_id: "504c28a2e2b845157708cb61",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>2018年10月27日晚上，突然收到服务器不能访问的告警通知，拜托了狼叔 <a href="/user/i5ting">@i5ting</a> 帮忙看看，结果登不上也ping不通。\n后来收到短信，发现是被ucloud封了，短信内容如下：</p>\n<blockquote>\n<p>【UCloud】尊敬的UCloud用户，您的IP：123.59.77.142  存在URL ：<a href="https://cnodejs.org/topic/57239bce5a26c4a841ecbf01">https://cnodejs.org/topic/57239bce5a26c4a841ecbf01</a> （详细信息请查看邮箱）包含违禁内容（包括但不限于翻墙等），违反了国家有关法律法规。目前依主管单位要求，对您的IP予以封停，请您尽快处理违规内容。待处理完成后请联系技术支持重新开启业务。[4000188113]</p>\n</blockquote>\n<p>然后联系了ucloud的客服，一下就打通了，对方态度挺好处理问题也快。ucloud说是运营商那边封的，不是他们的检测机制。所以需要联系运营商解决。\n考虑到各位亲爱的网友们的行为我无法控制，那么一直跟越来越严格的审查系统对抗只会让自己疲惫，所以我就站点迁到国外。来到了aws jp。</p>\n<p>我大致测了测，电信和移动的访问速度非常快，100ms以内，联通会慢一点，400ms以内吧。</p>\n<p>建议翻墙访问。</p>\n</div>',
	// 			title: "服务器迁移至 aws 日本机房",
	// 			last_reply_at: "2019-09-09T07:21:41.870Z",
	// 			good: false,
	// 			top: true,
	// 			reply_count: 205,
	// 			visit_count: 99286,
	// 			create_at: "2018-10-27T14:33:14.694Z",
	// 			author: { loginname: "alsotang", avatar_url: "https://avatars1.githubusercontent.com/u/1147375?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d5bed6ed53e9171e98a975b",
	// 			author_id: "516f989a6d38277306ae8c1b",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>这是一次硬核的地下铁沙龙，\n我们深入 Node.js 运行时底层，\n来讨论如何进行运行时的优化和诊断，\n让它可以在 Serverless，IoT 等等场景释放更大的价值。</p>\n<p>五位重量级的嘉宾，\n有 Node.js 技术委员会（TSC）成员，\n有来自浏览器厂商的骨灰级技术专家，\n还有阿里、Rokid 的大牛。</p>\n<p>欢迎你和我们一起，进入深海。</p>\n<p><strong>Agenda</strong>\n<img src="https://img.alicdn.com/tfs/TB10BqFdLb2gK0jSZK9XXaEgFXa-1408-2040.png" alt="Agenda"></p>\n<p>时 间：2019.09.08 下午 2 点\n地 点：杭州·玉泉饭店（具体地址详见邀约）</p>\n<p>报 名 链 接: <a href="https://survey.alibaba.com/apps/zhiliao/QlwUc77lF">https://survey.alibaba.com/apps/zhiliao/QlwUc77lF</a>\n活 动 主 页: <a href="https://fed.taobao.org/subway/">https://fed.taobao.org/subway/</a></p>\n<p><strong>已经报名的可以查看报名时的填写的邮箱，了解最新情况。</strong></p>\n</div>',
	// 			title: "Node 地下铁第九期「杭州站」线下沙龙邀约 - Let's Go Deep",
	// 			last_reply_at: "2019-09-09T05:12:46.292Z",
	// 			good: false,
	// 			top: true,
	// 			reply_count: 16,
	// 			visit_count: 12214,
	// 			create_at: "2019-08-20T12:54:06.836Z",
	// 			author: { loginname: "mariodu", avatar_url: "//gravatar.com/avatar/1cb272a2b4347c9a15b502ce7e4802ba?size=48" },
	// 		},
	// 		{
	// 			id: "5cbfd9aca86ae80ce64b3175",
	// 			author_id: "4f447c2f0a8abae26e01b27d",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><h2>前言</h2>\n<p>时隔一年，Node.js 12 如约而至，正式发布第一个 <a href="https://github.com/nodejs/Release">Current</a> 版本。</p>\n<p>该版本带来了诸如：</p>\n<ul>\n<li>V8 更新带来好多不错的特性。</li>\n<li>HTTP 解析速度提升。</li>\n<li>启动速度大幅提升。</li>\n<li>更好的诊断报告和堆分析工具。</li>\n<li>ESM 模块更新。</li>\n</ul>\n<p>原文地址：<a href="https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f">https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f</a>\n语雀地址：<a href="https://www.yuque.com/egg/nodejs/nodejs-12">https://www.yuque.com/egg/nodejs/nodejs-12</a></p>\n<h2>LTS vs Current</h2>\n<p><img src="https://cdn.nlark.com/yuque/0/2019/png/84182/1556074709431-35af45b8-ec7a-4a81-83d8-155eb519f04a.png#align=left&amp;display=inline&amp;height=389&amp;name=image.png&amp;originHeight=500&amp;originWidth=960&amp;size=58313&amp;status=done&amp;width=746" alt="image.png"></p>\n<p>如果你不了解 Node.js 的  Long Term Support 发布策略的话，一定要看看 <a href="https://github.com/nodejs/Release">https://github.com/nodejs/Release</a> 。</p>\n<p>就目前而言，Node.js 6.x 和 8.x 将在 2019 年末结束 LTS 的支持，大家尽快升级到 10.x 吧。</p>\n<h2>快速体验</h2>\n<pre class="prettyprint language-bash"><code>$ nvs add node&#x2F;12\n$ nvs use 12\n$ node -v\nv12.0.0\n</code></pre><p>具体参考这篇文章：<a href="https://zhuanlan.zhihu.com/p/63403762">科普文：使用 nvs 管理本地 Node.js 版本</a></p>\n<h2>V8 更新到 7.4</h2>\n<blockquote>\n<p>大部分情况下，我们不用去考虑性能问题，坐等 V8 版本更新就好了。（大雾）</p>\n</blockquote>\n<p>本次版本更新，也带来了好几个不错的特性：</p>\n<ul>\n<li><a href="https://v8.dev/blog/v8-release-72#async-stack-traces">异步堆栈跟踪</a></li>\n<li><a href="https://v8.dev/blog/v8-release-74#faster-calls-with-arguments-mismatch">参数调用不匹配时的调用速度优化</a></li>\n<li><a href="https://v8.dev/blog/v8-release-73#faster-await">更快的 await</a></li>\n<li><a href="https://v8.dev/blog/v8-release-72#javascript-parsing">更快的 JavaScript 解析速度</a></li>\n</ul>\n<p><strong>同时，跑了下我们 Egg 的一些内部测试，发现序列化有 10~20% 的性能提升，恐怖如斯！</strong></p>\n<p>另，奇丑无比的 <a href="https://github.com/tc39/proposal-class-fields">Private Class Fields</a> 也能用了：</p>\n<pre class="prettyprint language-javascript"><code>class IncreasingCounter {\n  #count = 0;\n  \n  get value() {\n    console.log(&#x27;Getting the current value!&#x27;);\n    return this.#count;\n  }\n  increment() {\n    this.#count++;\n  }\n}\n</code></pre><h2>HTTP 解析速度提升</h2>\n<p>默认的 HTTP 解析器切换为 <a href="https://github.com/nodejs/llhttp">llhttp</a> ，性能提升恐怖如斯：</p>\n<p><img src="https://cdn.nlark.com/yuque/0/2019/png/84182/1556072499637-686bb0e3-c75c-424c-851f-ad88aff183a2.png#align=left&amp;display=inline&amp;height=231&amp;name=image.png&amp;originHeight=404&amp;originWidth=1302&amp;size=88775&amp;status=done&amp;width=746" alt="image.png"></p>\n<blockquote>\n<p>点评：恐怖如斯。</p>\n</blockquote>\n<h2>启动速度提升</h2>\n<p>通过 <a href="https://v8.dev/blog/code-caching">v8 code cache</a> 的支持，<a href="https://github.com/nodejs/node/pull/27161">在构建时提前为内置库生成代码缓存</a>，从而提升 30% 的启动耗时。\n同时，通过<a href="https://github.com/nodejs/node/pull/24950">重用主进程缓存</a>，Workers Threads 的启动速度提升了 60% 。</p>\n<blockquote>\n<p>点评：恐怖如斯。</p>\n</blockquote>\n<h2>Workers Threads</h2>\n<p>在 10.x 已经引入的 <a href="https://nodejs.org/api/worker_threads.html">Workers Threads</a> 特性，在 12.x 里面默认启用，无需使用 <code>--experimental-worker</code> 开启。同时基于上一条的介绍，启动的速度也得到大幅提升。</p>\n<p>相关介绍：<a href="https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6">https://medium.com/@Trott/using-worker-threads-in-node-js-80494136dbb6</a></p>\n<h2>诊断报告</h2>\n<p>提供了新的实验性功能『诊断报告』，一个非常有用的特性。\n可用于帮助分析诸如：崩溃，性能问题，内存泄漏，高 CPU 占用等等问题。详见 <a href="https://medium.com/the-node-js-collection/easily-identify-problems-in-node-js-applications-with-diagnostic-report-dc82370d8029">这篇文章</a>。</p>\n<blockquote>\n<p>点评：这也是 <a href="https://www.aliyun.com/product/nodejs">AliNode</a> 之前的一个卖点之一。</p>\n</blockquote>\n<h2>Heap Dump</h2>\n<p>以前我们分析问题的时候，需要手动安装对应的类库或者使用 AliNode。</p>\n<p>在 12.x 里面内置了该功能，详见：</p>\n<ul>\n<li><a href="https://github.com/nodejs/node/pull/27133">https://github.com/nodejs/node/pull/27133</a></li>\n<li><a href="https://github.com/nodejs/node/pull/26501">https://github.com/nodejs/node/pull/26501</a></li>\n</ul>\n<blockquote>\n<p>点评：又一个 <a href="https://www.aliyun.com/product/nodejs">AliNode</a> 的功能被内置了。但其实影响不大，AliNode 的核心在于分析平台，这块的采集能力，本来他们就打算开源回馈出去的。</p>\n</blockquote>\n<p>同时，由于上述提到的 V8 升级，现在可以按照可用内存动态调整堆大小了。</p>\n<h2>ESM 模块方案更新</h2>\n<p>ES6 模块仍然还在实验阶段，不过有了新的方式，具体参见<a href="https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff">这篇文章</a>。</p>\n<blockquote>\n<p>点评：让子弹再飞一会，该特性真的不是痛点，不急。</p>\n</blockquote>\n<h2>其他更新</h2>\n<ul>\n<li>更好的原生模块支持，<a href="https://nodejs.org/api/n-api.html#n_api_n_api">N-API</a> 升级为版本 4，并 backport 到 Node.js 8.x 和 10.x。详细参见<a href="https://medium.com/the-node-js-collection/new-features-bring-native-add-ons-close-to-being-on-par-with-js-modules-cd4f9b8e4b4">这篇文章</a>。</li>\n<li>TLS 升级为 1.3， <a href="https://developer.ibm.com/blogs/openssl-111-has-landed-in-nodejs-master-and-why-its-important-for-nodejs-lts-releases/">增强安全功能</a>。</li>\n<li>随着 C++ 编译器的更新，现在要求 <code>GCC 6</code> 和 <code>glibc 2.17</code> ，对应的操作系统 Win7 和 macOS 10，详细参见<a href="https://github.com/nodejs/node/blob/v12.x/BUILDING.md#platform-list">这篇文章</a>。</li>\n</ul>\n<p>不过目前 node-gyp 的一些原生模块会编译失败：</p>\n<pre class="prettyprint language-bash"><code>nunjucks@3.2.0 › chokidar@2.1.5 › fsevents@^1.2.7 optional error: Error: Run &quot;sh -c node install&quot; error, exit code 1\n    at ChildProcess.&lt;anonymous&gt; (&#x2F;Users&#x2F;tz&#x2F;.npm-global&#x2F;lib&#x2F;node_modules&#x2F;tnpm&#x2F;node_modules&#x2F;_runscript@1.3.0@runscript&#x2F;index.js:74:21)\n    at ChildProcess.emit (events.js:196:13)\n    at maybeClose (internal&#x2F;child_process.js:1000:16)\n    at Process.ChildProcess._handle.onexit (internal&#x2F;child_process.js:267:5)\n</code></pre></div>',
	// 			title: "Node 12 值得关注的新特性",
	// 			last_reply_at: "2019-09-07T09:27:38.616Z",
	// 			good: false,
	// 			top: true,
	// 			reply_count: 62,
	// 			visit_count: 124777,
	// 			create_at: "2019-04-24T03:36:12.582Z",
	// 			author: { loginname: "atian25", avatar_url: "https://avatars2.githubusercontent.com/u/227713?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d75b481a7474a231a58a09d",
	// 			author_id: "5d6dc1ebd50f57234591103f",
	// 			tab: "share",
	// 			content: '<div class="markdown-text"><p>因个人身体原因去不了10 号的谷歌开发者大会，免费转一张自己的谷歌开发者大会门票，先到先得 ~</p>\n</div>',
	// 			title: "免费转 2019 GDD 门票",
	// 			last_reply_at: "2019-09-09T11:10:21.061Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 1,
	// 			visit_count: 199,
	// 			create_at: "2019-09-09T02:10:09.366Z",
	// 			author: { loginname: "skywalkerxl", avatar_url: "https://avatars0.githubusercontent.com/u/24824650?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d641d92dcd8e81121a61388",
	// 			author_id: "5899902f367bdfa208b76617",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>我的疑惑是，涉及单元测试在涉及数据库的部分应该怎么处理？\n最近在学习node.js 和 egg框架。看到了关于单元测试的部分。就是对单元测试的时候，涉及网络io 和数据库的部分逻辑我们应该怎么处理呢？</p>\n<p>我看到的文章的大概方案有两种。\n第一种是：\n通过单元测试框架的相关钩子，在启动测试前，连接到相应的测试数据库（测试数据库预先写入好需要的数据）中，然后再进行相应的测试。</p>\n<p>第二种方法是：\n关于数据库和网络io的，都使用mock方法。将数据库和网络io的相应测试分离。</p>\n<p>我是认同第二种方法的。因为涉及到外部的东西，就应该放到集成测试中去，这并不是单元测试的目标。所以，应该用mock方法去模拟相应的操作。\n但是，我又没找到可以mock数据库操作的库。google过了，好像也没找到相应的方法。</p>\n<p>不知道前辈们在单元测试时，是如果测试这部分（涉及数据库和网络io）的逻辑的。请给后辈一些指点，谢谢各位了！！</p>\n</div>',
	// 			title: "新人在学习egg.js 中，一些关单元测试的疑惑，请前辈们指导一下。",
	// 			last_reply_at: "2019-09-09T09:57:34.195Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 10,
	// 			visit_count: 1234,
	// 			create_at: "2019-08-26T17:57:38.557Z",
	// 			author: { loginname: "hopperhuang", avatar_url: "https://avatars1.githubusercontent.com/u/20254356?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d761a29d50f572345913053",
	// 			author_id: "5a0d348fe2f4b8ea22496498",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>医疗健康行业无论在国内外都是采用先进技术的先驱者之一，原因在于业内的利益相关者会更加接近数据、重视数据的重要性，从而加快在决策上面的动作，以期更好的患者的预期寿命和增进社会人口的健康。更重要的是，数据的质量和可用性足够的透明，使得以患者数据为中心的模型在医疗行业中发挥起重要的作用。</p>\n<p>根据斯坦福医学2017年健康趋势报告在过去的十年中，医疗健康行业捕获的数据量大幅增长。这是由于例如政府采取了电子病历（EMR）平台、设备（X射线，MRI，CT等）对医疗记录进行数字化，以及无处不在的个人健康/健身监视器（智能穿戴设备如Apple Watch等）。</p>\n<p>接下来我们将讨论如何使用API市场（包括其后面的一系列解决方案）作为解决此问题的方法。通过API市场，管理者可以安全地开放或者部分开放这些数据（用户的隐私数据和受到法律保护的信息不在描述范围当中），使医疗行业的患者或医疗机构和公民都可以访问这些数据，从而提高医疗健康行业的效率并实现人口健康技术的创新。</p>\n<h3>不是没数据，而是数据太多</h3>\n<p>现今世界各地的许多医疗及健康机构都在记录和总结医疗数据，并根据这些数据对患者下一步的医疗方案做出决策。这些数据通常保存在一个或多个EMR系统中。在绝大部分的情况下，很少能看到这类医疗数据可以作为经济数据来进行使用，有一部分原因是基于医疗道德及国家法律法规所限定，另一方面原因则是医疗机构基于经济方面拒绝数据共享。</p>\n<p>无法按完整原始数据进行共享的原因，主要来是国家政策和公共道德（如个人隐私）的结果。由于隐私原因，大多数国家/地区都有保护个人健康记录的政策指令（如HIPAA）。因此，来自EMR的患者原始医疗数据不能也应该被公开。在多种因素的共同作用下，医疗数据在行业内变成一个个黑盒子，没人能获取到更多的信息，进而使得医疗技术发展受到了限制。</p>\n<p>另一个被忽视的机会是医疗健康行业的科技发展潜力。在今天，中国国内的医疗技术或者医疗服务公司的数量，与国外相比较差距是非常大的，因为行业整体进入的壁垒很高，而更重要的是，医疗数据（即使已经经过脱敏，不包含患者个人社会信息）访问的障碍太大。如果健康医疗数据能够以更加智能、可靠、安全的形式进行经济化应用，那将为整个医疗行业带来一次重大的的创新浪潮，并使整个行业的所有从业者以及因此诞生的产品的使用者受益。</p>\n<h3>将API市场作为解决方案</h3>\n<p>在当今世界，数据平台已经成为了众多不同商业体系的运转中心，而API作为平台的数据连接器起到了关键的作用。各行各业都开始积极采用API优先的系统开发方法，我们在医疗健康领域也能很明显的看到这一点。一个健全的API市场可以解决医疗健康数据的商用问题，它将与数据使用者进行API社交，让他们从数据当中获取更多的信息，以便进行产品和技术的创新。API市场鼓励医疗机构或者医药企业思考如何更好的使用和保管他们合法的研究数据，并通过高可用性的API计划提供医疗数据，并进而产生效益。</p>\n<p>从实际出发，医疗健康行业的API市场主要担负的，是将医疗数据使用者和产生者建立起联系，而相应解决方案的最终愿景，则是建立一个以API市场为基础，以医疗健康数据合法交易为导向的经济体。在这个经济体当中，应该有一个全面的API管理平台，它为API市场概念提供了动力，而该平台使数据供应商能够设计，发布和管理API，同时实施安全管理，数据应用治理和收集分析工作。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d14fc201ff428a?w=1200&amp;h=486&amp;f=jpeg&amp;s=65995" alt></p>\n<p>图1：解决方案架构</p>\n<p>通过该解决方案，我们可以了解医疗健康IT领域的整体需求（对于其他行业也有很大一部分数据或者API是有共通的用处）。当所有产品的开发者和管理者都在使用基于API管理解决方案时，数据供应商会将所获得的合法的数据发布在API市场上，有需要的企业则同时会在市场上联系他们感兴趣的API供应商；API市场为供应方和消费方搭建了一个开放而安全的价值交换渠道，使得数据消费方可以根据所获得的数据产生更有价值或者有潜在价值的产品。</p>\n<h3>API市场该如何模块分工</h3>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d14fcb13140189?w=744&amp;h=710&amp;f=jpeg&amp;s=63034" alt></p>\n<p>图2：API市场角色及数据流向分析</p>\n<p>API 生产者：指的是API的设计师、架构师、开发人员、测试人员、发布人员。负责定义每一个API的应用范围（内部使用，外部使用，使用限制和使用权利）。在大型医疗项目的API生产中，生产者可以来自不同的医疗组织机构或者是企业。</p>\n<p>平台拥有者：指的是API市场的维护及搭建人员。他们负责API市场模块的维护，并促进API使用者之间的协作，并需要及时向API提供商报告消费者反馈。他们负责了整个API市场的平台宣传、支持和社区建设等任务。</p>\n<p>API使用者/消费者：指的主要是应用程序开发，是愿意利用医疗数据并从中获取价值的创新者；同时，这指代的可能是健康发展项目、医疗健康创业公司、跨国卫生组织、医院团体或者政府，他们热衷于提高医疗健康水平，为行业提供更好的医疗解决方案。</p>\n<h3>医疗健康API市场的组成</h3>\n<p>API的管理是平台的基础，它包含了API的网关、安全、管理、设计发布以及分析部分。</p>\n<p>API网关是整个平台的入口，最终与实际数据后端EHR系统相连接。它与API安全模块是密不可分的，另外它还将基于安全策略和令牌的信息为整个API管理平台提供支持服务。</p>\n<p>鉴于API数据的敏感性，在开发、发布、维护等每一个阶段都需要进行强有力的管理——通过API管理系统和平台管理者的维护，能够很好的强化和控制API的使用，并为管理者提供了良好的管理策略和使用模式。</p>\n<p>开发人员在发布API后，需要能够持续监控、测试和管理已发布的API，而API管理解决方案除了提供这些功能以外，还应该能够针对API调用失败，响应时间突然增加或API资源访问模式等异常变化，提供建议解决方案并发出报警提醒。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d14ffa9016fcaa?w=1138&amp;h=612&amp;f=jpeg&amp;s=101639" alt>\n图3：Healthcare API市场的组件</p>\n<h3>实现技术的产品</h3>\n<p>在提出的解决方案中，我们将系统集成和API管理视为两个不同的必备组件，需要深思的是集成组件应该可以通过不同协议与各种医疗健康系统做到集成。在此之后，它还需要对数据进行转换和规范化，进而提供一个统一的接口以供使用。在底层之上的集成层，应该根据管理者在API管理系统上设置的策略，对所有数据进行脱敏和匿名处理。当然，我们可以找到非常多不同的技术栈和框架达成此目的，比方说Apache Camel，Apache Synapse，Apache ServiceMix，Spring集成和Ballerina等等。</p>\n<p>API管理模块的组成主要有高性能的网关用于身份验证的密钥服务器，用于限制和分析的事件处理器，和用于API列表的开发人员门户以及用于职称管理的工作流引擎。一些流行的开源产品封装了这些功能，包括GoKu API Gateway、Kong API Gateway和Tyk API Gateway。</p>\n<h3>一个可参考的实施方案</h3>\n<p>下图是对我们所描述的框架进行了整合，并标出了可以使用这些技术选项的地方。这个图偏向于开源平台和其他框架，这为后期平台的发展和功能的定制提供了极大的灵活性。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d1500aa1577183?w=1200&amp;h=542&amp;f=jpeg&amp;s=72592" alt></p>\n<p>图4：具有技术选择的实现架构</p>\n<p>在此实现中，API管理系统提供了API全生命周期管理的功能，包括API使用、管理、商业化，数据安全和路由API管理，而API请求则将通过API网关发送到管理平台。</p>\n<p>参考图的方案同时兼考虑了API的生命周期 - 一旦新API发布，那么就必须弃用先前版本，并且将通知到所有API订阅者。API解决方案应当可以通过内部设置处理此问题，因此在API生命周期的每个阶段都应可以与该阶段对应的操作相关联，如图5所示。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d15010daf47616?w=1200&amp;h=1007&amp;f=jpeg&amp;s=101762" alt>\n图5：示例API生命周期视图</p>\n<p>API的安全性是整个API管理体系首要考虑的因素。虽然身份验证和授权是通过密钥或令牌完成的，但是更高级的权利应当是通过OAuth令牌的对应信息进行授权应用的。该信息可以是高级用户组的确认验证，也可以是关于数据使用者的属性判断，也可以是例如使用者的设备或者地理位置等。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d15017bd45565c?w=1200&amp;h=388&amp;f=jpeg&amp;s=36017" alt>\n图6：为API操作应用授权OAuth范围的示例</p>\n<p>API管理平台应当可以控制通过何种方式向第三方公开数据，例如允许无限制访问或受限制策略限制。而于此同时，API管理平台也应该能对请求数量和速率进行相应的规则限制。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d1501e02adfda5?w=1003&amp;h=559&amp;f=jpeg&amp;s=38223" alt>\n图7：如何将限制策略应用于API订阅的示例视图</p>\n<p>API管理平台应当可以控制通过何种方式向第三方公开数据，例如允许无限制访问或受限制策略限制。而于此同时，API管理平台也应该能对请求数量和速率进行相应的规则限制。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d15022e774bfd7?w=1200&amp;h=393&amp;f=jpeg&amp;s=54772" alt>\n图8：具有Patient / Provider FHIR API的开发人员门户的示例视图</p>\n<p>API管理系统的分析功能提供了最常见的API使用数据视图，为不同的使用者提供了有足够客观性的数据。而对于平台维护者来说，这可以为相关技术设备升级规划的决策提供更多的资料和信息。这样的好处是，API消费者可以进一步了解健康数据的可用性和重要性，而API提供商则可以提供和数据采集有关的更多数据。</p>\n<p><img src="https://user-gold-cdn.xitu.io/2019/9/9/16d1503a75b87b16?w=1200&amp;h=546&amp;f=jpeg&amp;s=45221" alt>\n图9：医疗保健 API分析视图示例</p>\n<p>在国内的API接口管理工具中，能完整实现API管理全流程并且体验较好的平台和工具就是 <a href="https://s.growingio.com/gke2DD">EOLINKER</a> 了，包括接口文档编辑、API测试、自动化测试和API监控和API网关等功能，能体验到完整的API研发方案。而国外的诸如POSTMAN、Swagger功能也很强大，但是前者注重测试，后者注重接口管理，可能并不全面，而且全英的语言对国人也不是很友好。因此有需求或者感兴趣可以各自了解下[EOLINKER](htthttps://s.growingio.com/gke2DDPOSTMAN、Swagger。</p>\n<h3>未来的改进</h3>\n<p>我们在上面的讨论中模拟了一个简单的场景，以展示医疗健康API市场的实际用途。不单单是医疗健康类API，所有API都可以从基于API管理解决方案的基础上，提供更多的价值。数据从来都不应该是封闭的，只有充分的利用数据本身的价值，让其在更多的机构、创业者手中得到灵活运用，才能创造出更大的价值。一方面可以让数据提供方获得更多的服务，另一方面则可以促进服务创新发展。</p>\n<p>值得关注的其中一点是，在有效的利用API进行服务创新和价值创新的同时，我们要对API的安全性投入更多的关注，而随着社会的进步发展，API经济将逐步被人们所重视，API的管理和使用将会在各行各业的发展中发挥更大的作用。</p>\n<p><em>参考资料：Sachini Samson，Transforming the Healthcare Industry through API Marketplaces，<a href="https://dzone.com/articles/api-life-cycle-basics-api-management">https://dzone.com/articles/api-life-cycle-basics-api-management</a></em></p>\n</div>',
	// 			title: "V2EX  ›  程序员\r\n医疗行业如何使用 API 市场？",
	// 			last_reply_at: "2019-09-09T09:23:53.740Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 0,
	// 			visit_count: 85,
	// 			create_at: "2019-09-09T09:23:53.740Z",
	// 			author: { loginname: "wardennn", avatar_url: "https://avatars0.githubusercontent.com/u/33686934?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d6cc214d50f572345910d75",
	// 			author_id: "5cede24d4036f24194cf7669",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>小弟之前的连的数据库是sqlserver，所以连接模块用的mssql。这个连接模块对应存储过程的调用有很多资料。所以没啥问题。现在的需要是换成mysql，那我想，mysql应该更容易，因为npm上明显mysql的下载量比mssql多得多。然而一般的sql语句都没问题。但是到调用存储过程的时候就发现问题了。我找了一下发现都没有怎么写这方面的，包括输入参数和参数类型和输出参数。瞬间傻了。npm上的只有几句话，例子都没有。</p>\n<p>这个就看不太出来输入参数和输出参数怎么定义。\n然后我百度找了一下。也没找到啥。所以想问问老哥们。去哪找个demo之类。想知道一下调用过程是怎么样的，还有参数的定义，存储过程是已经写好了的。就是调用的事。</p>\n</div>',
	// 			title: "node mysql数据库模块调用存储过程问题",
	// 			last_reply_at: "2019-09-09T08:38:25.096Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 12,
	// 			visit_count: 927,
	// 			create_at: "2019-09-02T07:17:40.381Z",
	// 			author: { loginname: "SKandAV", avatar_url: "https://avatars0.githubusercontent.com/u/26410064?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d6f25d7d50f57234591153e",
	// 			author_id: "5d663f87421846662d985739",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>目前后端统一管理 redis 等服务的配置信息，在应用启动前通过 http 加载配置，然后再创建应用</p>\n<p>如果是用 koa 比较方便的实现，目前想试水 eggjs 或 midway</p>\n<p>eggjs 或 midway 有没有办法实现这种需求，或者 plugin.js 里面禁用了，能不能手动在启用（前提是异步改的配置能起作用，看文档是同步的）？</p>\n<p>虽然可以抽成一个配置进行管理，但是有些东西需要一些动态配置，需要比较灵活的方式进行挂历</p>\n<p>eggjs 的 github 上看到了 <a href="https://github.com/eggjs/egg/issues/3225">egg  config  异步支持#3225</a> 目前是开放的，midway 有个询问异步启动的，但是目前都没有关闭</p>\n</div>',
	// 			title: "eggjs 或 midway 有没有办法异步加载配置文件",
	// 			last_reply_at: "2019-09-09T08:13:11.820Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 20,
	// 			visit_count: 1405,
	// 			create_at: "2019-09-04T02:47:51.197Z",
	// 			author: { loginname: "zhengxsFE", avatar_url: "https://avatars1.githubusercontent.com/u/7506913?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d749ccda7474a231a589e1e",
	// 			author_id: "5ab852d6320bb09d69e231f1",
	// 			tab: "ask",
	// 			content: '<div class="markdown-text"><p>在网上找到了一些,但是想想还是在论坛上问问大家有没有好用的,毕竟这里给出来的方案最靠谱 谢谢大家</p>\n</div>',
	// 			title: "麻烦推荐一个node操作Excel的包",
	// 			last_reply_at: "2019-09-09T07:53:06.618Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 6,
	// 			visit_count: 416,
	// 			create_at: "2019-09-08T06:16:45.695Z",
	// 			author: { loginname: "iori2882", avatar_url: "https://avatars3.githubusercontent.com/u/1480587?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d75ef73d50f572345912d7a",
	// 			author_id: "5bfffab8d6104a4f803a2fbb",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>这个论坛程序是前一段时间学习koa2的实践作品，技术栈是“koa2+react+mongodb”，已部署到：<a href="http://65.49.193.60:3001">http://65.49.193.60:3001</a></p>\n<p>已经初步实现的功能：</p>\n<ul>\n<li>发帖/删除/更改/置顶/点赞/匿名</li>\n<li>接龙/投票</li>\n<li>登录注册/修改密码/通过邮件重置密码/GitHub登录</li>\n<li>用户角色（admin/bm/user三级）及用户管理</li>\n<li>上传头像及修改</li>\n<li>中英文界面切换</li>\n<li>markdown编辑</li>\n<li>板块可配置</li>\n<li>保存退出时状态</li>\n</ul>\n<p>尚未实现功能：</p>\n<ul>\n<li>搜索</li>\n<li>私信</li>\n<li>@</li>\n<li>图片或文件上传</li>\n<li>后台管理</li>\n</ul>\n<p>client： <a href="https://github.com/maxyou/purebbs">https://github.com/maxyou/purebbs</a>\nserver：<a href="https://github.com/maxyou/purebbs-server">https://github.com/maxyou/purebbs-server</a></p>\n<p>出于学习的目的，尽量不使用第三方UI库，所以界面比较原始。头次写论坛程序，不足之处太多，欢迎朋友们提出批评建议。</p>\n</div>',
	// 			title: "学习nodejs，写了一个初级简版的论坛程序，请批判建议",
	// 			last_reply_at: "2019-09-09T07:50:58.819Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 4,
	// 			visit_count: 182,
	// 			create_at: "2019-09-09T06:21:39.389Z",
	// 			author: { loginname: "maxyou", avatar_url: "https://avatars1.githubusercontent.com/u/1485628?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d75ffb0a7474a231a58a49e",
	// 			author_id: "5d6e10a4d50f57234591122e",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>EXECUTIVE SUMMARY\nFARSIDE (Farside Array for Radio Science Investigations of the Dark ages and Exoplanets) is a Probe-class\nconcept to place a low radio frequency interferometric array on the farside of the Moon. A NASA￾funded design study, focused on the instrument, a deployment rover, the lander and base station,\ndelivered an architecture broadly consistent with the requirements for a Probe mission. This notional\narchitecture consists of 128 dual polarization antennas deployed across a 10 km area by a rover, and\ntethered to a base station for central processing, power and data transmission to the Lunar Gateway.\nFARSIDE would provide the capability to image the entire sky each minute in 1400 channels spanning\nfrequencies from 100 kHz to 40 MHz, extending down two orders of magnitude below bands\naccessible to ground-based radio astronomy. The lunar farside can simultaneously provide isolation\nfrom terrestrial radio frequency interference, auroral kilometric radiation, and plasma noise from the\nsolar wind. It is thus the only location within the inner solar system from which sky noise limited\nobservations can be carried out at sub-MHz frequencies. This would enable near-continuous\nmonitoring of the nearest stellar systems in the search for the radio signatures of coronal mass\nejections and energetic particle events, and would also detect the magnetospheres for the nearest\ncandidate habitable exoplanets. Simultaneously, FARSIDE would be used to characterize similar\nactivity in our own solar system, from the Sun to the outer planets, including the hypothetical Planet\nNine. Through precision calibration via an orbiting beacon, and exquisite foreground characterization,\nFARSIDE would also measure the Dark Ages global 21-cm signal at redshifts z∼50-100. The unique\nobservational window offered by FARSIDE would enable an abundance of additional science ranging\nfrom sounding of the lunar subsurface to characterization of the interstellar medium in the solar\nsystem neighborhood.</p>\n</div>',
	// 			title: "FARSIDE: A Low Radio Frequency Interferometric",
	// 			last_reply_at: "2019-09-09T07:34:04.854Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 1,
	// 			visit_count: 66,
	// 			create_at: "2019-09-09T07:30:56.252Z",
	// 			author: { loginname: "joediller", avatar_url: "https://avatars0.githubusercontent.com/u/52633072?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d75f7fad50f572345912dad",
	// 			author_id: "5a7a5d505321b5396004ec1e",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>这可能是今年增长最快的 node.js 后端框架了。</p>\n<p>截止目前  19210  star 了，预计9月底突破 20k 。 按目前增长趋势，2020年 可超过 koa 的star 数。</p>\n<p>npm 下载量：</p>\n<p>nest.js 每周下载量超过 10w ，是目前egg 20倍， 只有 koa 的 1/4。</p>\n<p><img src="//static.cnodejs.org/FirvY-nbOKg3sSHC2jyGrkYRkQdj" alt="image.png"></p>\n<p><a href="https://www.npmtrends.com/@nestjs/core-vs-egg">https://www.npmtrends.com/@nestjs/core-vs-egg</a></p>\n<p>star 趋势\n<img src="//static.cnodejs.org/FjLfsZFPc0yirehmxD2wuAskuUbv" alt="image.png"></p>\n<p>js 一时爽，重构火葬场，后端应用，可以说 typescript 是必备的，而一些纯 ts 框架对 typescript 的支持更好，并且，nest.js  和 midwayjs 这些都沿用了后端的 AOP 思想，更好地降低了耦合。\n我们目前也使用 k8s+istio 做微服务，nest.js 作为主体框架，使用 typeorm、graphql、grpc 等技术。</p>\n<p>中文文档： <a href="https://docs.nestjs.cn/">https://docs.nestjs.cn/</a>\n相关技术资料：<a href="https://docs.nestjs.cn/6/awesome/">https://docs.nestjs.cn/6/awesome/</a>\ngithub:   <a href="https://github.com/nestjs/nest/">https://github.com/nestjs/nest/</a></p>\n<p>欢迎一起交流，包括node.js 其他框架：\nQQ群： 277386223\n<img src="//static.cnodejs.org/FuoGtzAqQlC-z36EE4f-jE2tXo3D" alt="微信图片_20190815092450.jpg"></p>\n<p>微信群：\n（微信限制，超过100人，需要邀请进群）\n<img src="//static.cnodejs.org/FjPnq7gUJ_-358x9D_d_phpuzUj6" alt="image.png"></p>\n</div>',
	// 			title: "即将破 20k star，直逼koa。  值得关注的框架——nest.js",
	// 			last_reply_at: "2019-09-09T06:58:02.640Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 0,
	// 			visit_count: 234,
	// 			create_at: "2019-09-09T06:58:02.640Z",
	// 			author: { loginname: "zuohuadong", avatar_url: "https://avatars0.githubusercontent.com/u/11203929?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d71c1d1d50f57234591216d",
	// 			author_id: "5d5104cc697873456c6bca69",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p><img src="https://pic4.zhimg.com/v2-8c5114adb5b955b5a52df78ac2ede317_1200x500.jpg" alt></p>\n<h3>Nebula Graph 介绍</h3>\n<p><a href="https://github.com/vesoft-inc/nebula.git">Nebula Graph</a> 是开源的高性能分布式图数据库。项目使用 C++ 语言开发，<code>cmake</code> 工具构建。其中两个重要的依赖是 Facebook 的 Thrift RPC 框架和 <a href="https://github.com/facebook/folly">folly 库</a>.</p>\n<p>由于项目采用了 C++ 14 标准开发，需要使用较新版本的编译器和一些三方库。虽然 Nebula Graph 官方给出了一份<a href="https://github.com/vesoft-inc/nebula/blob/master/docs/manual-CN/how-to-build.md">开发者构建指南</a>，但是在本地构建完整的编译环境依然不是一件轻松的事。</p>\n<h3>开发环境构建</h3>\n<p>Nebula Graph 依赖较多，且一些第三方库需本地编译安装，为了方便开发者本地编译项目源码， Nebula Graph 官方为大家提供了一个预安装所有依赖的 [docker 镜像](<a href="https://hub.docker.com/r/vesoft/nebula-dev">docker hub</a>)。开发者只需如下的三步即可快速的编译 Nebula Graph 工程，参与 Nebula Graph 的开源贡献：</p>\n<ul>\n<li>\n<p>本地安装好 Docker</p>\n</li>\n<li>\n<p>将 <a href="https://hub.docker.com/r/vesoft/nebula-dev"><code>vesoft/nebula-dev</code></a> 镜像 <code>pull</code> 到本地</p>\n</li>\n</ul>\n<pre class="prettyprint language-shell"><code>   $ docker pull vesoft&#x2F;nebula-dev\n</code></pre><ul>\n<li>运行 <code>Docker</code> 并挂载 Nebula 源码目录到容器的 <code>/home/nebula</code> 目录</li>\n</ul>\n<pre class="prettyprint language-shell"><code>   $ docker run --rm -ti -v {nebula-root-path}:&#x2F;home&#x2F;nebula vesoft&#x2F;nebula-dev bash\n</code></pre><p>为了避免每次退出 docker 容器之后，重新键入上述的命令，我们在 <a href="https://github.com/vesoft-inc/nebula-dev-docker.git">vesoft-inc/nebula-dev-docker</a> 中提供了一个简单的 <code>build.sh</code> 脚本，可通过 <code>./build.sh /path/to/nebula/root/</code> 进入容器。</p>\n<ul>\n<li>使用 <code>cmake</code> 构建 Nebula 工程</li>\n</ul>\n<pre class="prettyprint language-shell"><code>   docker&gt; mkdir _build &amp;&amp; cd _build\n   docker&gt; cmake .. &amp;&amp; make -j2\n   docker&gt; ctest # 执行单元测试\n</code></pre><h3>提醒</h3>\n<p>Nebula 项目目前主要采用静态依赖的方式编译，加上附加的一些调试信息，所以生产的一些可执行文件会比较占用磁盘空间，建议小伙伴预留 20G 以上的空闲空间给 Nebula 目录 :)</p>\n<h3>Docker 加速小 Tips</h3>\n<p>由于 Docker 镜像文件存储在国外，在 pull 过程中会遇到速度过慢的问题，这里 Nebula Graph 提供一种加速 pull 的方法：通过配置国内地址解决，例如:</p>\n<ul>\n<li>Azure 中国镜像 <a href="https://dockerhub.azk8s.cn">https://dockerhub.azk8s.cn</a></li>\n<li>七牛云 <a href="https://reg-mirror.qiniu.com">https://reg-mirror.qiniu.com</a></li>\n</ul>\n<p>Linux 小伙伴可在 <code>/etc/docker/daemon.json</code> 中加入如下内容（若文件不存在，请新建该文件)</p>\n<pre class="prettyprint"><code>{\n  &quot;registry-mirrors&quot;: [\n    &quot;https:&#x2F;&#x2F;dockerhub.azk8s.cn&quot;,\n    &quot;https:&#x2F;&#x2F;reg-mirror.qiniu.com&quot;\n  ]\n}\n</code></pre><p>macOS 小伙伴请点击 <code>Docker Desktop 图标 -&gt; Preferences -&gt; Daemon -&gt; Registry mirrors</code>。 在列表中添加 <code>https://dockerhub.azk8s.cn</code> 和 <code>https://reg-mirror.qiniu.com</code> 。修改后，点击 Apply &amp; Restart 按钮， 重启 Docker。</p>\n<p><img src="https://pic3.zhimg.com/80/v2-6d2dd1b7e5999207ace1b590d31a15ea_hd.jpg" alt></p>\n<h3>Nebula Graph 社区</h3>\n<p>Nebula Graph 社区是由一群爱好图数据库，共同推进图数据库发展的开发者构成的社区。</p>\n<p>本文由 Nebula Graph 社区 Committer 伊兴路贡献，也欢迎阅读本文的你参与到 Nebula Graph 的开发，或向 Nebula Graph 投稿。</p>\n<h3>附录</h3>\n<blockquote>\n<p>Nebula Graph：一个开源的分布式图数据库。</p>\n</blockquote>\n<blockquote>\n<p>GitHub：<a href="https://strace.co/r/cnode">https://github.com/vesoft-inc/nebula</a></p>\n</blockquote>\n<blockquote>\n<p>知乎：<a href="https://www.zhihu.com/org/nebulagraph/posts">https://www.zhihu.com/org/nebulagraph/posts</a></p>\n</blockquote>\n<blockquote>\n<p>微博：<a href="https://weibo.com/nebulagraph">https://weibo.com/nebulagraph</a></p>\n</blockquote>\n</div>',
	// 			title: "使用 Docker 构建 Nebula Graph 源码",
	// 			last_reply_at: "2019-09-09T06:14:10.192Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 2,
	// 			visit_count: 268,
	// 			create_at: "2019-09-06T02:17:53.499Z",
	// 			author: { loginname: "QingZ11", avatar_url: "https://avatars0.githubusercontent.com/u/38887077?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5c0a92e415a4d545e3f4c5d7",
	// 			author_id: "5bc9f0ca9545eaf107b9ccdd",
	// 			tab: "ask",
	// 			content: '<div class="markdown-text"><p>要怎么去学习</p>\n</div>',
	// 			title: "如何学习angular",
	// 			last_reply_at: "2019-09-09T04:49:14.397Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 33,
	// 			visit_count: 3938,
	// 			create_at: "2018-12-07T15:33:56.403Z",
	// 			author: { loginname: "hhffhh", avatar_url: "https://avatars0.githubusercontent.com/u/3991376?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d6de312a7474a231a5886bd",
	// 			author_id: "5c18354b7ec239239ff57c7f",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>去年和朋友一起翻译的《架构师修炼之道》最近出版了。水平有限，请大家多多指正。荣誉是大家的，有错误都算我的！</p>\n<p>这本书是写给想当架构师的童鞋看的，全书分两个部分，第一部分主要讲程序猿要掌握哪些思维方式和工作方式才能成为架构师，以及架构设计的案例。第二部分归纳若干带领团队设计架构的方法和技巧。国外读者对这本书评价很高，原书读起来也很流畅，但愿我们翻译没拖后腿。</p>\n<p>闲话少说，这里有<strong>38页试读</strong>：<a href="https://pan.baidu.com/s/1pk50WEv9XqjHkLtH7iXxgg">https://pan.baidu.com/s/1pk50WEv9XqjHkLtH7iXxgg</a></p>\n<p>希望这本书对大家升职加薪脱单有帮助:)</p>\n<p><strong>天猫有售</strong>：<a href="https://detail.tmall.com/item.htm?spm=a230r.1.14.15.1cea1774yUneie&amp;id=601144871555">https://detail.tmall.com/item.htm?spm=a230r.1.14.15.1cea1774yUneie&amp;id=601144871555</a></p>\n<p><img src="//static.cnodejs.org/Fi-NjeCWw2xxioeMNBpnWVzhyDYO" alt="QQ图片20190830144122.jpg"></p>\n</div>',
	// 			title: "新书《架构师修炼之道》试读",
	// 			last_reply_at: "2019-09-09T03:42:28.048Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 2,
	// 			visit_count: 1118,
	// 			create_at: "2019-09-03T03:50:42.832Z",
	// 			author: { loginname: "sean-xu", avatar_url: "https://avatars0.githubusercontent.com/u/430849?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d63799b421846662d984d85",
	// 			author_id: "5ab852d6320bb09d69e231f1",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>麻烦问一下node8.9.2 真机部署用Windows server 行不行呢?行的话使用Windows server 2008 还是Windows server 2012呢?我手里就这2个版本~~</p>\n<p>主要是Linux排查问题我有恐慌感,我这里还用PM2啥的好像和Windows兼容也不太好~~~~~~~~~</p>\n</div>',
	// 			title: "node服务器真机部署用Windows server行不行",
	// 			last_reply_at: "2019-09-09T01:23:58.478Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 13,
	// 			visit_count: 1955,
	// 			create_at: "2019-08-26T06:18:03.141Z",
	// 			author: { loginname: "iori2882", avatar_url: "https://avatars3.githubusercontent.com/u/1480587?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d707bbbd50f572345911a3d",
	// 			author_id: "5ad86092a7d228c16b987042",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p><img src="//static.cnodejs.org/Ftba4fU26XoS2YGbzl5fEMfOP3aE" alt="屏幕快照 2019-09-05 上午11.05.30.png">\n这种现象是怎样出现的？\n在涉及金钱的计算时，这个问题很致命</p>\n</div>',
	// 			title: "JS中乘除法运算问题",
	// 			last_reply_at: "2019-09-09T00:59:25.115Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 14,
	// 			visit_count: 626,
	// 			create_at: "2019-09-05T03:06:35.163Z",
	// 			author: { loginname: "dingyuanwu", avatar_url: "https://avatars0.githubusercontent.com/u/27721756?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d737e2bd50f57234591263a",
	// 			author_id: "5d521b5e12a01945444162c2",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>使用 Browser JavaScript 生成 uuid 作为文件名，由于太长，想要通过 Base36 缩短。思路是先把 uuid 转换成 BigInt，然后再 bigInt.toStirng(36)。\n但问题是：</p>\n<ol>\n<li>怎么把 uuid 转成 BigInt</li>\n<li>还要解决浏览器不支持 BigInt 类型的问题。</li>\n</ol>\n<p>还有更便捷的方法吗？</p>\n</div>',
	// 			title: "怎么把 uuid 进行 Base36 编码",
	// 			last_reply_at: "2019-09-09T00:43:18.119Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 4,
	// 			visit_count: 361,
	// 			create_at: "2019-09-07T09:53:47.376Z",
	// 			author: { loginname: "xuxu7", avatar_url: "https://avatars1.githubusercontent.com/u/8274162?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d70c208d50f572345911ed0",
	// 			author_id: "5c0678d9d3b8ab334e8dab20",
	// 			tab: "share",
	// 			content:
	// 				'<div class="markdown-text"><p>2019年Nodejs Koa2 Typescript Eggjs Vue2等教程资源网盘分享：\n<a href="https://pan.baidu.com/s/1O2C6TolDzYpMnKIfQaaqog">Node.js视频教程网盘地址</a>\n<a href="https://pan.baidu.com/s/1KNaA97kGwNhavch5rP_G7w">Koa视频教程网盘地址</a>\n<a href="https://pan.baidu.com/s/1t6XHpny8-H8mApLkzcsS8w">8月Egg.js视频教程网盘下载地址</a>\n<a href="https://www.itying.com/goods-905.html">5月Typescript视频教程地址</a>\n<a href="https://www.itying.com/goods-1047.html">Angular7 Ionic4教程网盘下载地址：</a>\n需要更多学习资源可留下邮箱，有的就分享</p>\n</div>',
	// 			title: "2019Nodejs Koa2  Eggjs Typescript Vue2 Angular7 Ionic4教程资源网盘分享",
	// 			last_reply_at: "2019-09-08T23:56:40.099Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 2,
	// 			visit_count: 391,
	// 			create_at: "2019-09-05T08:06:32.776Z",
	// 			author: { loginname: "sinazl", avatar_url: "https://avatars2.githubusercontent.com/u/44309893?v=4&s=120" },
	// 		},
	// 		{
	// 			id: "5d6fd73dd50f5723459117f5",
	// 			author_id: "5d6fd461a7474a231a588db0",
	// 			tab: "ask",
	// 			content:
	// 				'<div class="markdown-text"><p>看到一个关于数据库操作的，各位大神鉴定一下。\n1，首先是file 定义。\nFile Customer, 有几个fields, 比如，CustNo, CustName, CustAddr, CustPhone,</p>\n<p>2，然后，定义一个model,</p>\n<pre class="prettyprint"><code>Class Customer {\n....\nasync getData(custNo, Fields){\nlet SQL = &quot;SELECT &quot; + Fields +&quot; FROM Customer where CustNo =&#x27;&quot; + custNo +&quot;&#x27;&quot;;\nreturn await Dbpool.RunSQLQuery(SQL);\n...\n}\n}\n\n3,使用 model,\nlet customer =  new Customer();\nlet customerName = await customer.getData(CustNo, &quot;CustName&quot;);\n...\n</code></pre><p>这样我就可以想访问哪个fields就访问哪个，多方便啊。\n有大神来指点一下优缺点吗？请无视各种语法错误，主要是这个思路好不好？</p>\n</div>',
	// 			title: "请问大神，这种操作“骚不骚”？",
	// 			last_reply_at: "2019-09-08T13:17:55.804Z",
	// 			good: false,
	// 			top: false,
	// 			reply_count: 13,
	// 			visit_count: 878,
	// 			create_at: "2019-09-04T15:24:45.887Z",
	// 			author: { loginname: "nodejsnewer", avatar_url: "https://avatars2.githubusercontent.com/u/54900998?v=4&s=120" },
	// 		},
	// 	],
	list: [],
	info: {},
	admireStatus: false, //点赞状态
	isShowReplyModal: false,
	collectTopicList: [],//收藏的话题
};

export default (state = TOPIC_STATE, action) => {
	switch (action.type) {
		case GET_TOPIC_LIST:
			return {
				...state,
				list: state.list.concat(action.list),
				page: action.page,
			};
		case CLEAR_TOPIC_LIST:
			return {
				...state,
				list: [],
			};
		case GET_TOPIC_INFO:
			return {
				...state,
				info: action.info,
			}
		case GET_COLLECT_TOPIC:
			return {
				...state,
				collectTopicList: action.collectTopicList
			}
		case ADMIRE_SUCCESS:
			return {
				...state,
				admireStatus: !state.admireStatus
			}
		case SHOW_REPLY_MODAL:
			return {
				...state,
				isShowReplyModal: true,
			}
		case HIDE_REPLY_MODAL:
			return {
				...state,
				isShowReplyModal: false,
			}
		default:
			return state;
	}
};
