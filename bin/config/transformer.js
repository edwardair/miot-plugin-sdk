'use strict';var e=require('path'),r=require("fs"),t=require("metro/src/transformer"),n=require("./common").project_dir,o=t.transform,i=t.getCacheKey,a=new Map,s=r.readFileSync(e.join(n,"bin","config","modules"));s&&((JSON.parse(s.toString()||"{}").modules||[]).filter(function(e){return e&&e.length>2}).forEach(function(e){a.set(e[1],e[2])}),s=null);module.exports={getCacheKey:i,transform:function(r){var t=e.relative(n,r.filename),i=a.get(t);return r.src=i||r.src,{ast:o(r).ast}}};