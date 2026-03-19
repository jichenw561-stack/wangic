/* ===== Digital Asset Dashboard — Real Product Feel ===== */
/* Replaces the old showSkillAssetView / getSkillRoleViews with a proper dashboard */

// ── Research Institute Data ──
const RI_TEAMS = [
  {id:'chenming',name:'陈明',title:'机械首席',avatar:'陈',color:'var(--blue)',
   skills:17,skillQ:4.8,calls:2940,callsTrend:'+34%',
   collabs:14,convVal:'2.1亿',ranking:1,
   topSkills:[{n:'具身智能产业图谱',c:412,r:'4.9'},{n:'减速器估值框架',c:287,r:'4.7'},{n:'管理层问答模板',c:203,r:'4.8'}],
   recentActs:[{t:'为投行张磊输出并购材料',d:'3h前',clr:'var(--blue)'},{t:'skill被财富部调用32次',d:'今日',clr:'var(--green)'},{t:'带出汇力智造并购线索',d:'昨日',clr:'var(--purple)'}],
   funnel:[214,71,19,6]},
  {id:'sunqiang',name:'孙强',title:'电新首席',avatar:'孙',color:'#12b76a',
   skills:22,skillQ:4.6,calls:2180,callsTrend:'+28%',
   collabs:11,convVal:'1.7亿',ranking:2,
   topSkills:[{n:'液冷CAPEX论证卡',c:356,r:'4.7'},{n:'储能出海跟踪',c:298,r:'4.5'},{n:'光伏产业链图谱',c:187,r:'4.6'}],
   recentActs:[{t:'为ECM周宁输出融资材料',d:'5h前',clr:'var(--blue)'},{t:'skill被资管基金调用28次',d:'今日',clr:'var(--green)'},{t:'带出瀚云冷却再融资线索',d:'2天前',clr:'var(--purple)'}],
   funnel:[186,58,14,4]},
  {id:'zhaowen',name:'赵薇',title:'TMT首席',avatar:'赵',color:'var(--purple)',
   skills:21,skillQ:4.5,calls:1860,callsTrend:'+19%',
   collabs:9,convVal:'1.3亿',ranking:3,
   topSkills:[{n:'先进封装竞争格局',c:324,r:'4.6'},{n:'AI芯片估值模型',c:276,r:'4.4'},{n:'半导体设备问答',c:198,r:'4.5'}],
   recentActs:[{t:'为机构销售许航组织闭门会',d:'6h前',clr:'var(--blue)'},{t:'芯源装备管理层问答被调用',d:'今日',clr:'var(--green)'},{t:'带出先进封装主题产品线索',d:'3天前',clr:'var(--purple)'}],
   funnel:[168,47,12,3]},
  {id:'zhouzhiyuan',name:'周志远',title:'医药首席',avatar:'周',color:'#f04438',
   skills:19,skillQ:4.3,calls:1520,callsTrend:'+12%',
   collabs:7,convVal:'0.9亿',ranking:4,
   topSkills:[{n:'ADC赛道估值',c:267,r:'4.4'},{n:'创新药BD跟踪',c:213,r:'4.2'},{n:'CXO景气判断',c:178,r:'4.3'}],
   recentActs:[{t:'为资管沈岩输出风险预警',d:'昨日',clr:'var(--red)'},{t:'ADC主题skill被调用19次',d:'今日',clr:'var(--green)'},{t:'带出康辰医药兑现节奏判断',d:'4天前',clr:'var(--blue)'}],
   funnel:[142,38,9,2]},
  {id:'liuwei',name:'刘伟',title:'化工首席',avatar:'刘',color:'#b8860b',
   skills:14,skillQ:4.1,calls:980,callsTrend:'+8%',
   collabs:5,convVal:'0.6亿',ranking:5,
   topSkills:[{n:'合成生物图谱',c:189,r:'4.2'},{n:'新材料估值',c:156,r:'4.0'},{n:'碳中和政策追踪',c:112,r:'4.1'}],
   recentActs:[{t:'为创投唐睿输出退出材料',d:'2天前',clr:'var(--blue)'},{t:'生物制造skill周更新',d:'3天前',clr:'var(--green)'}],
   funnel:[96,24,6,1]},
  {id:'wanghan',name:'王涵',title:'宏观首席',avatar:'王',color:'#6366f1',
   skills:11,skillQ:4.4,calls:1340,callsTrend:'+15%',
   collabs:6,convVal:'0.8亿',ranking:6,
   topSkills:[{n:'利率预测框架',c:298,r:'4.5'},{n:'汇率风险模型',c:234,r:'4.3'},{n:'宏观事件日历',c:187,r:'4.4'}],
   recentActs:[{t:'为跨境韩璟输出汇率判断',d:'昨日',clr:'var(--blue)'},{t:'宏观月报skill被调用34次',d:'今日',clr:'var(--green)'}],
   funnel:[124,32,8,2]},
  {id:'zhangyu',name:'张宇',title:'金融首席',avatar:'张',color:'#0ea5e9',
   skills:9,skillQ:3.8,calls:720,callsTrend:'+5%',
   collabs:3,convVal:'0.4亿',ranking:7,
   topSkills:[{n:'银行估值模型',c:156,r:'3.9'},{n:'保险行业图谱',c:123,r:'3.7'}],
   recentActs:[{t:'skill被财富部调用12次',d:'今日',clr:'var(--green)'}],
   funnel:[78,18,4,0]}
];

// ── IB Team Data ──
const IB_BANKERS = [
  {id:'zhanglei',name:'张磊',title:'执行董事·制造业组',avatar:'张',color:'var(--blue)',
   platRate:92,platLabel:'深度使用',tagColor:'green',
   callResearch:87,callVenture:64,callBranch:52,callWealth:38,
   leads:28,meetings:14,projects:5,mandates:2,
   recentActs:[{t:'调用陈明数字人完成汇力并购材料',d:'3h前',clr:'var(--blue)'},{t:'通过创投库匹配灵巧机器人',d:'昨日',clr:'var(--purple)'},{t:'分公司协同苏州属地会面',d:'2天前',clr:'var(--green)'}],
   platVsSolo:'平台驱动 24 条线索 / 单点 4 条'},
  {id:'wuhao',name:'吴昊',title:'董事总经理·产业金融',avatar:'吴',color:'#12b76a',
   platRate:85,platLabel:'高使用率',tagColor:'green',
   callResearch:72,callVenture:58,callBranch:41,callWealth:29,
   leads:22,meetings:11,projects:4,mandates:1,
   recentActs:[{t:'调用研究数字人出产业入股方案',d:'5h前',clr:'var(--blue)'},{t:'从分公司获取园区基金线索',d:'今日',clr:'var(--green)'}],
   platVsSolo:'平台驱动 19 条线索 / 单点 3 条'},
  {id:'zhengu',name:'郑昱',title:'执行董事·股权衍生品',avatar:'郑',color:'var(--purple)',
   platRate:78,platLabel:'常规使用',tagColor:'blue',
   callResearch:56,callVenture:23,callBranch:18,callWealth:34,
   leads:18,meetings:9,projects:3,mandates:1,
   recentActs:[{t:'调用研究判断设计collar方案',d:'昨日',clr:'var(--blue)'},{t:'联动做市团队准备流动性支持',d:'2天前',clr:'var(--green)'}],
   platVsSolo:'平台驱动 14 条线索 / 单点 4 条'},
  {id:'zhouning',name:'周宁',title:'执行总经理·ECM',avatar:'周',color:'#0ea5e9',
   platRate:71,platLabel:'常规使用',tagColor:'blue',
   callResearch:63,callVenture:31,callBranch:22,callWealth:45,
   leads:16,meetings:8,projects:3,mandates:1,
   recentActs:[{t:'调用孙强数字人出CAPEX论证',d:'6h前',clr:'var(--blue)'},{t:'获取机构销售预询价反馈',d:'今日',clr:'var(--green)'}],
   platVsSolo:'平台驱动 12 条线索 / 单点 4 条'},
  {id:'hanjing',name:'韩璟',title:'董事总经理·国际业务',avatar:'韩',color:'#b8860b',
   platRate:58,platLabel:'需提升',tagColor:'gold',
   callResearch:34,callVenture:19,callBranch:15,callWealth:12,
   leads:12,meetings:5,projects:2,mandates:0,
   recentActs:[{t:'调用宏观数字人出汇率报告',d:'2天前',clr:'var(--blue)'},{t:'海外标的自行筛选未走平台',d:'3天前',clr:'var(--red)'}],
   platVsSolo:'平台驱动 7 条线索 / 单点 5 条'},
  {id:'chenshi',name:'陈实',title:'副总裁·TMT',avatar:'陈',color:'#6366f1',
   platRate:42,platLabel:'较少使用',tagColor:'red',
   callResearch:18,callVenture:8,callBranch:5,callWealth:6,
   leads:9,meetings:3,projects:1,mandates:0,
   recentActs:[{t:'仅个人关系推进TMT项目',d:'本周',clr:'var(--red)'},{t:'未调用研究数字人',d:'近30天',clr:'var(--red)'}],
   platVsSolo:'平台驱动 3 条线索 / 单点 6 条'},
  {id:'libin',name:'李斌',title:'副总裁·医药',avatar:'李',color:'#f04438',
   platRate:35,platLabel:'走老路',tagColor:'red',
   callResearch:12,callVenture:4,callBranch:2,callWealth:3,
   leads:7,meetings:2,projects:0,mandates:0,
   recentActs:[{t:'全部项目依赖个人关系推动',d:'近90天',clr:'var(--red)'},{t:'未使用统一材料模板',d:'近60天',clr:'var(--red)'}],
   platVsSolo:'平台驱动 1 条线索 / 单点 6 条'}
];

// ── Render Helpers ──
function daBar(pct,color){
  return `<div class="da-bar-wrap"><div class="da-bar"><div class="da-bar-fill" style="width:${pct}%;background:${color}"></div></div></div>`;
}
function daRatingStars(score){
  const full=Math.floor(score),half=score%1>=0.5?1:0;
  return '★'.repeat(full)+(half?'½':'')+ `<span style="opacity:.3">${'★'.repeat(5-full-half)}</span>`;
}
function daPlatTag(label,colorClass){
  return `<span class="da-tag ${colorClass}">${label}</span>`;
}

// ── RESEARCH INSTITUTE LEADER VIEW ──
function renderResearchView(selectedId){
  const sel = RI_TEAMS.find(t=>t.id===selectedId) || RI_TEAMS[0];
  // KPIs
  const totalSkills=RI_TEAMS.reduce((a,t)=>a+t.skills,0);
  const totalCalls=RI_TEAMS.reduce((a,t)=>a+t.calls,0);
  const totalCollabs=RI_TEAMS.reduce((a,t)=>a+t.collabs,0);
  const totalVal=RI_TEAMS.reduce((a,t)=>a+parseFloat(t.convVal),0).toFixed(1);

  mainContent.className='signal-feed';
  mainContent.style.padding='14px 18px';
  mainContent.innerHTML=`
    ${buildRoleTabs('research')}
    <div class="da-kpi-strip">
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--blue)">${RI_TEAMS.length}</div><div class="da-kpi-label">首席 / 团队</div><div class="da-kpi-trend up">18 条行业线</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--green)">${totalSkills}</div><div class="da-kpi-label">研究 Skill</div><div class="da-kpi-trend up">近90天 +84</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--purple)">${(totalCalls/1000).toFixed(1)}k</div><div class="da-kpi-label">30天被调用</div><div class="da-kpi-trend up">+22% MoM</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:#b8860b">${totalVal}亿</div><div class="da-kpi-label">协同价值</div><div class="da-kpi-trend up">+38% QoQ</div></div>
    </div>
    <div class="da-table-wrap">
      <table class="da-table">
        <thead><tr>
          <th style="width:26%">首席</th>
          <th style="width:10%">Skill</th>
          <th style="width:10%">质量</th>
          <th style="width:22%">被调用</th>
          <th style="width:16%">协同转化</th>
          <th style="width:16%">价值归因</th>
        </tr></thead>
        <tbody>
          ${RI_TEAMS.map(t=>`<tr class="${t.id===sel.id?'selected':''}" onclick="showSkillAssetView('research','${t.id}')">
            <td><div class="da-person"><div class="da-avatar" style="background:${t.color}">${t.avatar}</div><div class="da-person-info"><div class="da-person-name">${t.name}</div><div class="da-person-role">${t.title}</div></div></div></td>
            <td><span style="font-weight:700;color:var(--text)">${t.skills}</span></td>
            <td><span style="color:var(--green);font-weight:600;font-size:11px">${t.skillQ}</span></td>
            <td>${daBar(Math.min(t.calls/30,100),'var(--blue)')}<span style="font-size:11px;color:var(--blue);font-weight:600">${t.calls.toLocaleString()} <span style="color:var(--green);font-size:10px">${t.callsTrend}</span></span></td>
            <td><span style="font-weight:600;color:var(--purple);font-size:11px">${t.collabs} 条</span></td>
            <td><span style="font-weight:700;color:#b8860b;font-size:12px">${t.convVal}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;

  // Detail panel
  renderResearchDetail(sel);
}

function renderResearchDetail(p){
  detailTitle.textContent=`${p.name} · 数字资产画像`;
  detailSub.textContent=p.title+' · 排名 #'+p.ranking;
  let h=`<div class="da-profile">
    <div class="da-profile-header">
      <div class="da-profile-avatar" style="background:${p.color}">${p.avatar}</div>
      <div><div class="da-profile-name">${p.name}</div><div class="da-profile-title">${p.title}</div></div>
    </div>
    <div class="da-stat-grid">
      <div class="da-stat"><div class="da-stat-val" style="color:var(--blue)">${p.skills}</div><div class="da-stat-label">Skill 数</div></div>
      <div class="da-stat"><div class="da-stat-val" style="color:var(--green)">${p.skillQ}</div><div class="da-stat-label">质量评分</div></div>
      <div class="da-stat"><div class="da-stat-val" style="color:var(--purple)">${p.calls.toLocaleString()}</div><div class="da-stat-label">被调用</div></div>
    </div></div>`;

  // Funnel
  const labels=['观点触发','排会推进','正式立项','mandate'];
  h+=`<div class="da-section">研究转化漏斗</div><div class="da-funnel">`;
  p.funnel.forEach((v,i)=>{
    if(i>0) h+=`<div class="da-funnel-arrow">→</div>`;
    const colors=['var(--blue)','var(--purple)','var(--green)','#b8860b'];
    h+=`<div class="da-funnel-step"><div class="da-funnel-num" style="color:${colors[i]}">${v}</div><div class="da-funnel-text">${labels[i]}</div></div>`;
  });
  h+=`</div>`;

  // Top Skills
  h+=`<div class="da-section">高价值 Skill</div>`;
  p.topSkills.forEach(s=>{
    h+=`<div class="da-skill-row"><span class="da-skill-icon">⚡</span><span class="da-skill-name">${s.n}</span><span class="da-skill-calls">${s.c}次</span><span class="da-skill-rating">★${s.r}</span></div>`;
  });

  // Recent activity
  h+=`<div class="da-section">近期动态</div><div class="da-timeline">`;
  p.recentActs.forEach(a=>{
    h+=`<div class="da-tl-item"><div class="da-tl-dot" style="background:${a.clr}"></div><div class="da-tl-text">${a.t}</div><div class="da-tl-time">${a.d}</div></div>`;
  });
  h+=`</div>`;

  h+=`<div class="da-section">考核建议</div><div style="font-size:12px;color:var(--text2);line-height:1.7">不只看研报篇数，更看 Skill 被谁用了、带出多少协同、转化到什么阶段。${p.name}的数字资产为集团带来 <b style="color:#b8860b">${p.convVal}</b> 可追踪协同价值。</div>`;

  detailBody.innerHTML=h;
}

// ── INVESTMENT BANKING VIEW ──
function renderIBView(selectedId){
  const sel=IB_BANKERS.find(b=>b.id===selectedId) || IB_BANKERS[0];
  const avgRate=Math.round(IB_BANKERS.reduce((a,b)=>a+b.platRate,0)/IB_BANKERS.length);
  const totalLeads=IB_BANKERS.reduce((a,b)=>a+b.leads,0);
  const totalMeetings=IB_BANKERS.reduce((a,b)=>a+b.meetings,0);
  const totalMandates=IB_BANKERS.reduce((a,b)=>a+b.mandates,0);

  mainContent.className='signal-feed';
  mainContent.style.padding='14px 18px';
  mainContent.innerHTML=`
    ${buildRoleTabs('ib')}
    <div class="da-kpi-strip">
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--blue)">${avgRate}%</div><div class="da-kpi-label">平台使用率</div><div class="da-kpi-trend ${avgRate>60?'up':'down'}">${avgRate>60?'高于':'低于'}基准</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--green)">${totalLeads}</div><div class="da-kpi-label">平台线索</div><div class="da-kpi-trend up">vs 单点 ${IB_BANKERS.length*4}</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--purple)">${totalMeetings}</div><div class="da-kpi-label">平台排会</div><div class="da-kpi-trend up">+41% QoQ</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:#b8860b">${totalMandates}</div><div class="da-kpi-label">mandate 争取</div><div class="da-kpi-trend up">+67% YoY</div></div>
    </div>
    <div class="da-table-wrap">
      <table class="da-table">
        <thead><tr>
          <th style="width:24%">Banker</th>
          <th style="width:22%">平台使用</th>
          <th style="width:14%">状态</th>
          <th style="width:12%">线索</th>
          <th style="width:12%">排会</th>
          <th style="width:16%">mandate</th>
        </tr></thead>
        <tbody>
          ${IB_BANKERS.map(b=>`<tr class="${b.id===sel.id?'selected':''}" onclick="showSkillAssetView('ib','${b.id}')">
            <td><div class="da-person"><div class="da-avatar" style="background:${b.color}">${b.avatar}</div><div class="da-person-info"><div class="da-person-name">${b.name}</div><div class="da-person-role">${b.title}</div></div></div></td>
            <td>${daBar(b.platRate,b.platRate>=70?'var(--green)':b.platRate>=50?'#b8860b':'var(--red)')}<span style="font-size:11px;font-weight:700;color:var(--text)">${b.platRate}%</span></td>
            <td>${daPlatTag(b.platLabel,b.tagColor)}</td>
            <td><span style="font-weight:600;color:var(--blue)">${b.leads}</span></td>
            <td><span style="font-weight:600;color:var(--purple)">${b.meetings}</span></td>
            <td><span style="font-weight:700;color:#b8860b;font-size:13px">${b.mandates}</span></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>`;

  renderIBDetail(sel);
}

function renderIBDetail(b){
  detailTitle.textContent=`${b.name} · 平台使用画像`;
  detailSub.textContent=b.title;
  const isGood=b.platRate>=70;

  let h=`<div class="da-profile">
    <div class="da-profile-header">
      <div class="da-profile-avatar" style="background:${b.color}">${b.avatar}</div>
      <div><div class="da-profile-name">${b.name} ${daPlatTag(b.platLabel,b.tagColor)}</div><div class="da-profile-title">${b.title}</div></div>
    </div>
    <div class="da-stat-grid">
      <div class="da-stat"><div class="da-stat-val" style="color:${isGood?'var(--green)':'var(--red)'}">${b.platRate}%</div><div class="da-stat-label">平台使用率</div></div>
      <div class="da-stat"><div class="da-stat-val" style="color:var(--blue)">${b.leads}</div><div class="da-stat-label">平台线索</div></div>
      <div class="da-stat"><div class="da-stat-val" style="color:var(--purple)">${b.meetings}</div><div class="da-stat-label">排会数</div></div>
    </div></div>`;

  // Compare card
  h+=`<div class="da-section">来源结构</div>
    <div style="font-size:12px;color:var(--text2);line-height:1.6;margin-bottom:8px">${b.platVsSolo}</div>
    <div class="da-compare">
      <div class="da-compare-col" style="border-color:${isGood?'rgba(18,183,106,.3)':'var(--border)'}">
        <div class="da-compare-title"><span style="color:var(--green)">✓</span> 平台协同</div>
        <div class="da-compare-val" style="color:var(--green)">${b.leads - Math.floor(b.leads*0.3)}</div>
        <div class="da-compare-sub">条线索来自平台</div>
      </div>
      <div class="da-compare-col" style="border-color:${!isGood?'rgba(240,68,56,.3)':'var(--border)'}">
        <div class="da-compare-title"><span style="color:var(--red)">✗</span> 单点关系</div>
        <div class="da-compare-val" style="color:var(--red)">${Math.floor(b.leads*0.3)}</div>
        <div class="da-compare-sub">条仅靠个人推动</div>
      </div>
    </div>`;

  // Module usage
  h+=`<div class="da-section">模块调用深度</div>`;
  const mods=[{n:'研究数字人',v:b.callResearch,c:'var(--blue)'},{n:'创投项目库',v:b.callVenture,c:'var(--purple)'},{n:'分公司资源',v:b.callBranch,c:'var(--green)'},{n:'财富/机构',v:b.callWealth,c:'#b8860b'}];
  mods.forEach(m=>{
    h+=`<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
      <span style="font-size:11px;color:var(--text3);width:72px;flex-shrink:0">${m.n}</span>
      <div class="da-bar" style="flex:1"><div class="da-bar-fill" style="width:${Math.min(m.v,100)}%;background:${m.c}"></div></div>
      <span style="font-size:11px;font-weight:600;color:var(--text);width:28px;text-align:right">${m.v}</span>
    </div>`;
  });

  // Recent activity
  h+=`<div class="da-section">近期动态</div><div class="da-timeline">`;
  b.recentActs.forEach(a=>{
    h+=`<div class="da-tl-item"><div class="da-tl-dot" style="background:${a.clr}"></div><div class="da-tl-text">${a.t}</div><div class="da-tl-time">${a.d}</div></div>`;
  });
  h+=`</div>`;

  h+=`<div class="da-section">管理建议</div><div style="font-size:12px;color:var(--text2);line-height:1.7">${isGood
    ?`${b.name}善于利用集团平台扩展线索来源，<b style="color:var(--green)">推进效率高于均值</b>，是平台化工作方式的标杆。`
    :`${b.name}仍主要依赖个人单点关系推进项目，<b style="color:var(--red)">未充分利用集团数字人平台</b>。建议引导接入研究、创投与分公司资源，提升协同效率。`
  }</div>`;

  detailBody.innerHTML=h;
}

// ── ADMIN VIEW ──
function renderAdminView(){
  mainContent.className='signal-feed';
  mainContent.style.padding='14px 18px';
  mainContent.innerHTML=`
    ${buildRoleTabs('admin')}
    <div class="da-kpi-strip">
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--blue)">1,247</div><div class="da-kpi-label">技能模板</div><div class="da-kpi-trend up">+84 近90天</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--green)">95%</div><div class="da-kpi-label">可继承率</div><div class="da-kpi-trend up">+3% MoM</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:var(--purple)">8,560</div><div class="da-kpi-label">知识单元</div><div class="da-kpi-trend up">+1,240 MoM</div></div>
      <div class="da-kpi"><div class="da-kpi-val" style="color:#b8860b">342%↑</div><div class="da-kpi-label">复用效率 YoY</div><div class="da-kpi-trend up">组织复利</div></div>
    </div>`;
  const cats=[
    {icon:'🧠',name:'研究资产库',sub:'研报框架 / 首席问答 / 产业图谱',count:'612 个',tag:'核心资产',tagC:'blue'},
    {icon:'🎯',name:'客户资产库',sub:'客户画像 / 服务偏好 / 转化线索',count:'284 组',tag:'持续增长',tagC:'green'},
    {icon:'🧭',name:'流程资产库',sub:'排会模板 / 协同路由 / 提案脚本',count:'173 条',tag:'标准化',tagC:'purple'},
    {icon:'🤝',name:'组织资产库',sub:'跨部门路径 / 属地关系 / playbook',count:'92 条',tag:'可复制',tagC:'gold'},
    {icon:'👤',name:'数字分身资产',sub:'23 位首席知识体 / 126 位研究员',count:'149 个',tag:'活跃',tagC:'green'},
    {icon:'⚡',name:'自定义规则库',sub:'各部门自建告警 / 碰撞 / 监控规则',count:'12 条',tag:'增长中',tagC:'blue'}
  ];
  cats.forEach((c,i)=>{
    const row=document.createElement('div');
    row.className='sig-card';row.style.animationDelay=(i*0.06)+'s';
    row.innerHTML=`<div class="sig-icon" style="background:rgba(88,166,255,0.1);font-size:16px">${c.icon}</div>
      <div class="sig-body"><div class="sig-source">${c.sub}</div><div class="sig-text" style="font-size:13px">${c.name}</div>
      <div class="sig-meta"><span style="color:var(--blue)">${c.count}</span><span>${daPlatTag(c.tag,c.tagC)}</span></div></div>`;
    mainContent.appendChild(row);
  });

  detailTitle.textContent='能力资产总览';
  detailSub.textContent='跨团队复用的研究、客户与流程资产';
  detailBody.innerHTML=`
    <div class="da-section">资产构成</div>
    <div style="font-size:12px;color:var(--text2);line-height:1.8">· 研究资产：研报框架、行业问答、专家互动记录<br>· 客户资产：需求画像、历史问询、转化线索<br>· 流程资产：撮合步骤、告警规则、项目模板<br>· 组织资产：跨部门路径、属地经验、deal playbook</div>
    <div class="da-section">复用方式</div>
    <div style="font-size:12px;color:var(--text2);line-height:1.8">人员轮岗、团队扩张或新场景上线时，已有能力以模板、数字分身和标准流程继续被调用，不需从零重建。</div>
    <div class="da-section">管理意义</div>
    <div style="font-size:12px;color:var(--text2);line-height:1.8">管理层看到的不只是单点人效，而是集团是否把知识、客户理解和协同打法真正沉淀成<b style="color:var(--blue)">可经营的数字资产</b>。</div>`;
}

// ── Tab Builder ──
function buildRoleTabs(active){
  const tabs=[
    {id:'admin',icon:'⚙',label:'系统总览'},
    {id:'research',icon:'🔬',label:'研究所领导'},
    {id:'ib',icon:'🏦',label:'投行领导'}
  ];
  return `<div class="da-role-bar">${tabs.map(t=>
    `<div class="da-role-tab ${active===t.id?'active':''}" onclick="showSkillAssetView('${t.id}')">
      <span class="da-role-icon">${t.icon}</span>${t.label}
    </div>`
  ).join('')}</div>`;
}

// ── Entry Point (overrides old function) ──
function showSkillAssetView(role, focusId){
  if(!role) role=currentSkillRole||'admin';
  currentSkillRole=role;
  if(role==='research'){
    setUser('研','研究所领导','所务管理 / 数字化考核');
    setHeader('⚡','数字资产 · 研究所领导视角','','btn','','');
    renderResearchView(focusId||RI_TEAMS[0].id);
  } else if(role==='ib'){
    setUser('投','投行负责人','平台协同 / 经营视角');
    setHeader('⚡','数字资产 · 投行领导视角','','btn','','');
    renderIBView(focusId||IB_BANKERS[0].id);
  } else {
    setUser('管','系统管理员','AI RIS 商情中枢');
    setHeader('⚡','数字资产 · 系统总览','','btn','','');
    renderAdminView();
  }
}
function showSkillDetail(){ showSkillAssetView(currentSkillRole); }
