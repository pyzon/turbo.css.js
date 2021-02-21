
const BASE_CSS_SUBTREE_MIN = `/** Turbo CSS, subtree scoped base styles | turbocss.com **/
.t1-root{line-height:1.5;-webkit-text-size-adjust:100%;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:16px;text-align:start}.t1-root body,body.t1-root{margin:0}.t1-root,.t1-root *,.t1-root ::after,.t1-root ::before,.t1-root::after,.t1-root::before{box-sizing:border-box;border-width:0}.t1-root audio,.t1-root embed,.t1-root iframe,.t1-root object,audio.t1-root,embed.t1-root,iframe.t1-root,object.t1-root{display:block;max-width:100%;vertical-align:middle}.t1-root canvas,.t1-root img,.t1-root svg,.t1-root video,canvas.t1-root,img.t1-root,svg.t1-root,video.t1-root{display:block;max-width:100%;height:auto;vertical-align:middle}.t1-root img,img.t1-root{border-style:none}.t1-root code,.t1-root kbd,.t1-root pre,.t1-root samp,code.t1-root,kbd.t1-root,pre.t1-root,samp.t1-root{font-family:Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.t1-root code,.t1-root kbd,.t1-root samp,code.t1-root,kbd.t1-root,samp.t1-root{font-size:1em}.t1-root main,main.t1-root{display:block}.t1-root h1,.t1-root h2,.t1-root h3,.t1-root h4,.t1-root h5,.t1-root h6,h1.t1-root,h2.t1-root,h3.t1-root,h4.t1-root,h5.t1-root,h6.t1-root{margin:0;font-size:inherit;font-weight:inherit}.t1-root hr,hr.t1-root{margin:0;height:0;overflow:visible}.t1-root blockquote,.t1-root dd,.t1-root dl,.t1-root figure,.t1-root p,.t1-root pre,blockquote.t1-root,dd.t1-root,dl.t1-root,figure.t1-root,p.t1-root,pre.t1-root{margin:0}.t1-root pre,pre.t1-root{font-size:1em}.t1-root a,a.t1-root{background-color:transparent;color:inherit;text-decoration:inherit}.t1-root abbr[title],abbr.t1-root[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.t1-root b,.t1-root strong,b.t1-root,strong.t1-root{font-weight:bolder}.t1-root small,small.t1-root{font-size:80%}.t1-root sub,.t1-root sup,sub.t1-root,sup.t1-root{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.t1-root sub,sub.t1-root{bottom:-.25em}.t1-root sup,sup.t1-root{top:-.5em}.t1-root [hidden],.t1-root[hidden]{display:none}.t1-root button,button.t1-root{background-color:transparent;background-image:none;padding:0}.t1-root button:focus,button.t1-root:focus{outline:1px dotted;outline:3px auto -webkit-focus-ring-color}.t1-root [role=button],.t1-root button,.t1-root[role=button],button.t1-root{cursor:pointer}.t1-root button,.t1-root input,.t1-root optgroup,.t1-root select,.t1-root textarea,button.t1-root,input.t1-root,optgroup.t1-root,select.t1-root,textarea.t1-root{margin:0;padding:0;line-height:inherit;color:inherit;font-family:inherit;font-size:100%}.t1-root button,.t1-root input,button.t1-root,input.t1-root{overflow:visible}.t1-root button,.t1-root select,button.t1-root,select.t1-root{text-transform:none}.t1-root [type=button],.t1-root [type=reset],.t1-root [type=submit],.t1-root button,.t1-root[type=button],.t1-root[type=reset],.t1-root[type=submit],button.t1-root{-webkit-appearance:button}.t1-root [type=button]::-moz-focus-inner,.t1-root [type=reset]::-moz-focus-inner,.t1-root [type=submit]::-moz-focus-inner,.t1-root button::-moz-focus-inner,.t1-root[type=button]::-moz-focus-inner,.t1-root[type=reset]::-moz-focus-inner,.t1-root[type=submit]::-moz-focus-inner,button.t1-root::-moz-focus-inner{border-style:none;padding:0}.t1-root [type=button]:-moz-focusring,.t1-root [type=reset]:-moz-focusring,.t1-root [type=submit]:-moz-focusring,.t1-root button:-moz-focusring,.t1-root[type=button]:-moz-focusring,.t1-root[type=reset]:-moz-focusring,.t1-root[type=submit]:-moz-focusring,button.t1-root:-moz-focusring{outline:1px dotted ButtonText}.t1-root fieldset,fieldset.t1-root{margin:0;padding:0}.t1-root legend,legend.t1-root{box-sizing:border-box;display:table;max-width:100%;white-space:normal;color:inherit;padding:0}.t1-root progress,progress.t1-root{vertical-align:baseline}.t1-root textarea,textarea.t1-root{overflow:auto;resize:vertical}.t1-root [type=checkbox],.t1-root [type=radio],.t1-root[type=checkbox],.t1-root[type=radio]{box-sizing:border-box;padding:0}.t1-root [type=number]::-webkit-inner-spin-button,.t1-root [type=number]::-webkit-outer-spin-button,.t1-root[type=number]::-webkit-inner-spin-button,.t1-root[type=number]::-webkit-outer-spin-button{height:auto}.t1-root [type=search],.t1-root[type=search]{-webkit-appearance:textfield;outline-offset:-2px}.t1-root [type=search]::-webkit-search-decoration,.t1-root[type=search]::-webkit-search-decoration{-webkit-appearance:none}.t1-root ::-webkit-file-upload-button,.t1-root::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.t1-root details,details.t1-root{display:block}.t1-root summary,summary.t1-root{display:list-item}.t1-root template,template.t1-root{display:none}.t1-root ol,.t1-root ul,ol.t1-root,ul.t1-root{list-style:none;margin:0;padding:0}.t1-root table,table.t1-root{border-collapse:collapse}`;

export default BASE_CSS_SUBTREE_MIN;

