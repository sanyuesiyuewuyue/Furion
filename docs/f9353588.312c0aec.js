(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(135)),i=t(137),s={id:"get-start",title:"2. \u4e00\u5206\u949f\u5165\u95e8",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8"},c={unversionedId:"get-start",id:"get-start",isDocsHomePage:!1,title:"2. \u4e00\u5206\u949f\u5165\u95e8",description:"2.1 Hello Fur",source:"@site/docs\\get-start.mdx",slug:"/get-start",permalink:"/docs/get-start",editUrl:"https://gitee.com/monksoul/Fur/tree/main/handbook/docs/get-start.mdx",version:"current",sidebar_label:"2. \u4e00\u5206\u949f\u5165\u95e8",sidebar:"docs",previous:{title:"1.3 \u5173\u4e8e\u4f5c\u8005",permalink:"/docs/author"},next:{title:"3.1 \u914d\u7f6e",permalink:"/docs/configuration"}},u=[{value:"2.1 Hello Fur",id:"21-hello-fur",children:[{value:"2.1.1 \u521b\u5efa <code>FurService</code> \u7c7b",id:"211-\u521b\u5efa-furservice-\u7c7b",children:[]},{value:"2.1.2 \u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c",id:"212-\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c",children:[]}]},{value:"2.2 \u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301",id:"22-\u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301",children:[{value:"2.2.1 \u6dfb\u52a0 <code>Person</code> \u5b9e\u4f53\u7c7b",id:"221-\u6dfb\u52a0-person-\u5b9e\u4f53\u7c7b",children:[]},{value:"2.2.2 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"222-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.2.3 \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32",id:"223-\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32",children:[]},{value:"2.2.4 \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"224-\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.2.5 \u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868",id:"225-\u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868",children:[]}]},{value:"2.3 \u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50",id:"23-\u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50",children:[{value:"\u9644\u4e0a <code>PersonDto</code>",id:"\u9644\u4e0a-persondto",children:[]}]}],p={rightToc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"21-hello-fur"},"2.1 Hello Fur"),Object(o.b)("h3",{id:"211-\u521b\u5efa-furservice-\u7c7b"},"2.1.1 \u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"h3"},"FurService")," \u7c7b"),Object(o.b)("p",null,"\u8bbe\u7f6e ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u4e3a\u542f\u52a8\u9879\uff0c\u5e76\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.Application")," \u4e2d\u521b\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"FurService")," \u7c7b\uff0c\u5e76\u8f93\u5165\u4ee5\u4e0b\u5185\u5bb9:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,5,6,12}","{1,5,6,12}":!0}),'using Fur.DynamicApiController;\n\nnamespace Fur.Application\n{\n    [DynamicApiController] // \u8fd9\u91cc\u4f7f\u7528\u7279\u6027\u65b9\u5f0f\n    public class FurService /*: IDynamicApiController*/ // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u65b9\u5f0f\n    {\n        /// <summary>\n        /// \u5411\u4e16\u754c\u95ee\u597d\n        /// </summary>\n        /// <returns></returns>\n        public string SayHello()\n        {\n            return $"Hello {nameof(Fur)}";\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"212-\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c"},"2.1.2 \u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u6548\u679c"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.Web.Entry")," \u9879\u76ee\u4e2d\u9009\u62e9 ",Object(o.b)("inlineCode",{parentName:"p"},"wwwroot")," \u53f3\u952e\u9009\u62e9\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b")),Object(o.b)("img",{src:Object(i.a)("img/getstart1.png"),style:{height:400}}),Object(o.b)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),Object(o.b)("img",{src:Object(i.a)("img/getstart2.gif")}),Object(o.b)("h2",{id:"22-\u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301"},"2.2 \u6dfb\u52a0\u6570\u636e\u5e93\u652f\u6301"),Object(o.b)("h3",{id:"221-\u6dfb\u52a0-person-\u5b9e\u4f53\u7c7b"},"2.2.1 \u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"h3"},"Person")," \u5b9e\u4f53\u7c7b"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.Core")," \u4e2d\u65b0\u5efa ",Object(o.b)("inlineCode",{parentName:"p"},"Person")," \u5b9e\u4f53\u7c7b\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1,7}","{1,7}":!0}),"using Fur.DatabaseAccessor;\nusing System;\nusing System.ComponentModel.DataAnnotations;\n\nnamespace Fur.Core\n{\n    public class Person : Entity    // \u7ee7\u627f\u81ea Entity \u62bd\u8c61\u7c7b\n    {\n        /// <summary>\n        /// \u6784\u9020\u51fd\u6570\n        /// </summary>\n        public Person()\n        {\n            CreatedTime = DateTime.Now;\n            IsDeleted = false;\n        }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [MaxLength(32)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n\n        /// <summary>\n        /// \u4f4f\u5740\n        /// </summary>\n        public string Address { get; set; }\n    }\n}\n")),Object(o.b)("h3",{id:"222-\u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.2.2 \u521b\u5efa\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u4e2d\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},"FurDbContext")," \u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{1-2,6-7,13}","{1-2,6-7,13}":!0}),'using Fur.DatabaseAccessor;\nusing Microsoft.EntityFrameworkCore;\n\nnamespace Fur.EntityFramework.Core\n{\n    [DbContext("DbConnectionString")]   // \u914d\u7f6e\u8fde\u63a5\u5b57\u7b26\u4e32\n    public class FurDbContext : AppDbContext<FurDbContext>  // \u7ee7\u627f AppDbContext<> \u7c7b\n    {\n        /// <summary>\n        /// \u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\n        /// </summary>\n        /// <param name="options"></param>\n        public FurDbContext(DbContextOptions<FurDbContext> options) : base(options)\n        {\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"223-\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32"},"2.2.3 \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"dbsettings.json")," \u4e2d\u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u5b57\u7b26\u4e32\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'{2-4} title="Fur\\framework\\Fur.EntityFramework.Core\\dbsettings.json"',"{2-4}":!0,title:'"Fur\\framework\\Fur.EntityFramework.Core\\dbsettings.json"'}),'{\n  "ConnectionStrings": {\n    "DbConnectionString": "Server=localhost;Database=Fur;User=sa;Password=000000;MultipleActiveResultSets=True;",\n    "Sqlite3ConnectionString": "Data Source=./Fur.db"\n  }\n}\n')),Object(o.b)("h3",{id:"224-\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.2.4 \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("p",null,"\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"Fur.EntityFramework.Core")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"FurEntityFrameworkCoreStartup")," \u4e2d\u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:'{12-14} title="Fur\\framework\\Fur.EntityFramework.Core\\FurEntityFrameworkCoreStartup.cs"',"{12-14}":!0,title:'"Fur\\framework\\Fur.EntityFramework.Core\\FurEntityFrameworkCoreStartup.cs"'}),"using Fur.DatabaseAccessor;\nusing Microsoft.Extensions.DependencyInjection;\n\nnamespace Fur.EntityFramework.Core\n{\n    [Startup(600)]\n    public sealed class FurEntityFrameworkCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u914d\u7f6e\u6570\u636e\u5e93\u4e0a\u4e0b\u6587\uff0c\u652f\u6301N\u4e2a\u6570\u636e\u5e93\n            services.AddDatabaseAccessor(options =>\n            {\n                options.AddDbPool<FurDbContext>(DbProvider.Sqlite);\n            });\n        }\n    }\n}\n")),Object(o.b)("h3",{id:"225-\u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868"},"2.2.5 \u901a\u8fc7\u547d\u4ee4\u521b\u5efa\u6570\u636e\u5e93\u8868"),Object(o.b)("p",null,"\u6253\u5f00 ",Object(o.b)("inlineCode",{parentName:"p"},"\u7a0b\u5e8f\u5305\u7ba1\u7406\u63a7\u5236\u53f0"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(o.b)("img",{src:Object(i.a)("img/getstart3.png"),style:{height:400}}),Object(o.b)("p",null,"\u9009\u62e9 ",Object(o.b)("inlineCode",{parentName:"p"},"\u9ed8\u8ba4\u9879\u76ee\u4e3a"),"\uff1a",Object(o.b)("inlineCode",{parentName:"p"},"Fur.Database.Migrations"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),Object(o.b)("img",{src:Object(i.a)("img/getstart4.png")}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4"),"\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Add-Migration v0.0.1\n")),Object(o.b)("img",{src:Object(i.a)("img/getstart5.png")}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"\u63d0\u4ea4\u5230\u6570\u636e\u5e93\u66f4\u6539")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Update-Database\n")),Object(o.b)("img",{src:Object(i.a)("img/getstart6.png")}),Object(o.b)("img",{src:Object(i.a)("img/getstart7.png"),style:{height:400}}),Object(o.b)("h2",{id:"23-\u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50"},"2.3 \u589e\u5220\u67e5\u6539\u5206\u9875\u4f8b\u5b50"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs",metastring:"{14-19}","{14-19}":!0}),'using Fur.Core;\nusing Fur.DatabaseAccessor;\nusing Fur.DynamicApiController;\nusing Mapster;\nusing Microsoft.EntityFrameworkCore;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace Fur.Application\n{\n    [DynamicApiController] // \u8fd9\u91cc\u4f7f\u7528\u7279\u6027\u65b9\u5f0f\n    public class FurService /*: IDynamicApiController*/ // \u4e5f\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u65b9\u5f0f\n    {\n        // \u521d\u59cb\u5316\u4ed3\u50a8\n        private readonly IRepository<Person> _personRepository;\n        public FurService(IRepository<Person> personRepository)\n        {\n            _personRepository = personRepository;\n        }\n\n        /// <summary>\n        /// \u65b0\u589e\u4e00\u6761\n        /// </summary>\n        public async Task<int> Insert(PersonDto personDto)\n        {\n            // \u5982\u679c\u4e0d\u9700\u8981\u8fd4\u56de\u81ea\u589eId\uff0c\u4f7f\u7528 InsertAsync\u5373\u53ef\n            var newEntity = await _personRepository.InsertNowAsync(personDto.Adapt<Person>());\n            return newEntity.Entity.Id;\n\n            // \u8fd8\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\n            // await personDto.Adapt<Person>().InsertNowAsync();\n        }\n\n        /// <summary>\n        /// \u66f4\u65b0\u4e00\u6761\n        /// </summary>\n        /// <param name="personDto"></param>\n        public async Task Update(PersonDto personDto)\n        {\n            await _personRepository.UpdateAsync(personDto.Adapt<Person>());\n\n            // \u8fd8\u53ef\u4ee5\u76f4\u63a5\u64cd\u4f5c\n            // await personDto.Adapt<Person>().UpdateAsync();\n        }\n\n        /// <summary>\n        /// \u5220\u9664\u4e00\u6761\n        /// </summary>\n        /// <param name="id"></param>\n        public async Task Delete(int id)\n        {\n            await _personRepository.DeleteAsync(id);\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u4e00\u6761\n        /// </summary>\n        /// <param name="id"></param>\n        public async Task<PersonDto> Find(int id)\n        {\n            var person = await _personRepository.FindAsync(id);\n            return person.Adapt<PersonDto>();\n        }\n\n        /// <summary>\n        /// \u67e5\u8be2\u6240\u6709\n        /// </summary>\n        /// <returns></returns>\n        public async Task<List<PersonDto>> GetAll()\n        {\n            var persons = await _personRepository.AsAsyncEnumerable();\n            return persons.Adapt<List<PersonDto>>();\n        }\n\n        /// <summary>\n        /// \u5206\u9875\u67e5\u8be2\n        /// </summary>\n        /// <param name="pageIndex"></param>\n        /// <param name="pageSize"></param>\n        /// <returns></returns>\n        public async Task<PagedList<PersonDto>> GetAllByPage(int pageIndex = 1, int pageSize = 10)\n        {\n            var pageResult = await _personRepository.AsQueryable().ToPagedListAsync(pageIndex, pageSize);\n            return pageResult.Adapt<PagedList<PersonDto>>();\n        }\n    }\n}\n')),Object(o.b)("img",{src:Object(i.a)("img/getstart8.gif")}),Object(o.b)("h3",{id:"\u9644\u4e0a-persondto"},"\u9644\u4e0a ",Object(o.b)("inlineCode",{parentName:"h3"},"PersonDto")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cs"}),"using System.ComponentModel.DataAnnotations;\n\nnamespace Fur.Application\n{\n    public class PersonDto\n    {\n        /// <summary>\n        /// Id\n        /// </summary>\n        public int? Id { get; set; }\n\n        /// <summary>\n        /// \u59d3\u540d\n        /// </summary>\n        [StringLength(32, MinimumLength = 2)]\n        public string Name { get; set; }\n\n        /// <summary>\n        /// \u5e74\u9f84\n        /// </summary>\n        public int Age { get; set; }\n    }\n}\n")),Object(o.b)("p",null,"\u8bf4\u597d\u4e00\u5206\u949f\u5165\u95e8\uff0c\u4f60\u4eec\u7528\u4e86\u591a\u957f\u65f6\u95f4\u3002\ud83d\ude01"))}l.isMDXComponent=!0},135:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(i,".").concat(m)]||l[m]||b[m]||o;return t?a.a.createElement(d,s(s({ref:n},u),{},{components:t})):a.a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},136:function(e,n,t){"use strict";var r=t(0),a=t(19);n.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},137:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var r=t(136),a=t(138);function o(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(r.a)();return{withBaseUrl:(t,r)=>function(e,n,t,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(r)return n+t;const i=t.startsWith(n)?t:n+t.replace(/^\//,"");return o?e+i:i}(n,e,t,r)}}function i(e,n={}){const{withBaseUrl:t}=o();return t(e,n)}},138:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a}))}}]);