module.exports.config = {
	name: "tikvideo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "KhánhMilo & fix by LTChi",
	description: "Tải video tiktok xóa logo",
	commandCategory: "media",
	usages: "tik [url]",
	cooldowns: 10,
	
};

const _0x5d68=['statSync','threadID','senderID','992gqZxIK','arraybuffer','playAddr','Không\x20thể\x20xử\x20lý\x20yêu\x20cầu\x20của\x20bạn!','data','join','video-nwm.p.rapidapi.com','49oZeIBY','name','request','createReadStream','run','1038083kkUTaN','8NGPBiU','Không\x20thể\x20gửi\x20file\x20vì\x20dung\x20lượng\x20lớn\x20hơn\x2025MB.','Bạn\x20phải\x20ngập\x20url\x20video\x20tiktok\x20!!!','\x27https://www.tiktok.com/@','https://video-nwm.p.rapidapi.com/url/','148084dJtfbS','tiktok-scraper','412280iWCWHf','writeFileSync','2082412fd5msh902a44c9a8ab843p15d921jsn82bc78439711','.mp4','1104961qwRfVf','utf-8','/video/','fs-extra','axios','item','exports','91RlODTx','messageID','log','130281AiqlmM','/cache/','video','sendMessage','7nwhPzX','GET','16295hfOqxx','collector'];function _0x1c54(_0x7f3809,_0x1321c2){return _0x1c54=function(_0x5d685f,_0x1c540b){_0x5d685f=_0x5d685f-0x13e;let _0x396fc7=_0x5d68[_0x5d685f];return _0x396fc7;},_0x1c54(_0x7f3809,_0x1321c2);}const _0x15ae26=_0x1c54;(function(_0x365bf3,_0x4d23bc){const _0x5341d8=_0x1c54;while(!![]){try{const _0x57dd95=-parseInt(_0x5341d8(0x140))*parseInt(_0x5341d8(0x14e))+parseInt(_0x5341d8(0x149))*parseInt(_0x5341d8(0x155))+parseInt(_0x5341d8(0x147))*-parseInt(_0x5341d8(0x143))+parseInt(_0x5341d8(0x166))+-parseInt(_0x5341d8(0x15a))+-parseInt(_0x5341d8(0x162))+parseInt(_0x5341d8(0x160))*parseInt(_0x5341d8(0x15b));if(_0x57dd95===_0x4d23bc)break;else _0x365bf3['push'](_0x365bf3['shift']());}catch(_0x4f3cdc){_0x365bf3['push'](_0x365bf3['shift']());}}}(_0x5d68,0x9b25e),module[_0x15ae26(0x13f)][_0x15ae26(0x159)]=async function({api:_0xafa72e,event:_0x162122,args:_0x54f3e3}){const _0x2f9a47=_0x15ae26,_0x137883=require(_0x2f9a47(0x16a)),_0x31511c=require(_0x2f9a47(0x161)),_0x2644d5=require(_0x2f9a47(0x169));if(!_0x54f3e3[_0x2f9a47(0x153)]('')!='\x20')return _0xafa72e['sendMessage'](_0x2f9a47(0x15d),_0x162122[_0x2f9a47(0x14c)],_0x162122[_0x2f9a47(0x141)]);var _0xa3d42a=_0x54f3e3[0x0];try{const _0x19f16a={'noWaterMark':!![],'hdVideo':!![]},_0x28b714=await _0x31511c['getVideoMeta'](_0xa3d42a,_0x19f16a);console['log'](JSON['stringify'](_0x28b714,null,0x2));const _0x30ee4d=_0x28b714[_0x2f9a47(0x14a)][0x0]['id'],_0x245635=_0x28b714[_0x2f9a47(0x14a)][0x0]['authorMeta'][_0x2f9a47(0x156)],_0xb006ae={'method':_0x2f9a47(0x148),'url':_0x2f9a47(0x15f),'params':{'url':_0x2f9a47(0x15e)+_0x245635+_0x2f9a47(0x168)+_0x30ee4d+'\x27'},'headers':{'x-rapidapi-key':_0x2f9a47(0x164),'x-rapidapi-host':_0x2f9a47(0x154)}};var _0x29b886=await _0x137883[_0x2f9a47(0x157)](_0xb006ae);if(_0x29b886[_0x2f9a47(0x152)][_0x2f9a47(0x13e)]['video'][_0x2f9a47(0x150)][0x0]==undefined)get=_0x29b886[_0x2f9a47(0x152)][_0x2f9a47(0x13e)][_0x2f9a47(0x145)][_0x2f9a47(0x150)];else get=_0x29b886['data'][_0x2f9a47(0x13e)][_0x2f9a47(0x145)][_0x2f9a47(0x150)][0x0];pathus=__dirname+(_0x2f9a47(0x144)+_0x162122[_0x2f9a47(0x14c)]+'-'+_0x162122[_0x2f9a47(0x14d)]+'.mp4');var _0x25f03e=(await _0x137883['get'](get,{'responseType':_0x2f9a47(0x14f)}))['data'];_0x2644d5[_0x2f9a47(0x163)](pathus,Buffer['from'](_0x25f03e,_0x2f9a47(0x167))),console[_0x2f9a47(0x142)](get);if(_0x2644d5[_0x2f9a47(0x14b)](__dirname+(_0x2f9a47(0x144)+_0x162122[_0x2f9a47(0x14c)]+'-'+_0x162122[_0x2f9a47(0x14d)]+'.mp4'))['size']>0x1900000)return _0xafa72e[_0x2f9a47(0x146)](_0x2f9a47(0x15c),_0x162122['threadID'],()=>unlinkSync(__dirname+(_0x2f9a47(0x144)+_0x162122[_0x2f9a47(0x14c)]+'-'+_0x162122[_0x2f9a47(0x14d)]+'.mp4')),_0x162122[_0x2f9a47(0x141)]);else return _0xafa72e['sendMessage']({'body':'Loading\x20success\x20✅','attachment':_0x2644d5[_0x2f9a47(0x158)](__dirname+(_0x2f9a47(0x144)+_0x162122['threadID']+'-'+_0x162122[_0x2f9a47(0x14d)]+_0x2f9a47(0x165)))},_0x162122[_0x2f9a47(0x14c)],()=>_0x2644d5['unlinkSync'](__dirname+(_0x2f9a47(0x144)+_0x162122[_0x2f9a47(0x14c)]+'-'+_0x162122[_0x2f9a47(0x14d)]+_0x2f9a47(0x165))),_0x162122[_0x2f9a47(0x141)]);}catch{return _0xafa72e['sendMessage'](_0x2f9a47(0x151),_0x162122['threadID'],_0x162122[_0x2f9a47(0x141)]);};});
