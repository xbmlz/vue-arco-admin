System.register([],(function(r,o){"use strict";var a=document.createElement("style");return a.innerHTML=".arco-form-item-status-validating .arco-input-wrapper:not(.arco-input-disabled),.arco-form-item-status-validating .arco-textarea-wrapper:not(.arco-textarea-disabled){background-color:var(--color-fill-2);border-color:transparent}.arco-form-item-status-validating .arco-input-wrapper:not(.arco-input-disabled):hover,.arco-form-item-status-validating .arco-textarea-wrapper:not(.arco-textarea-disabled):hover{background-color:var(--color-fill-3);border-color:transparent}.arco-form-item-status-validating .arco-input-wrapper:not(.arco-input-disabled).arco-input-focus,.arco-form-item-status-validating .arco-textarea-wrapper:not(.arco-textarea-disabled).arco-textarea-focus{background-color:var(--color-bg-2);border-color:rgb(var(--primary-6));box-shadow:0 0 0 0 var(--color-primary-light-2)}.arco-form-item-status-validating .arco-select-view:not(.arco-select-view-disabled),.arco-form-item-status-validating .arco-input-tag:not(.arco-input-tag-disabled){background-color:var(--color-fill-2);border-color:transparent}.arco-form-item-status-validating .arco-select-view:not(.arco-select-view-disabled):hover,.arco-form-item-status-validating .arco-input-tag:not(.arco-input-tag-disabled):hover{background-color:var(--color-fill-3);border-color:transparent}.arco-form-item-status-validating .arco-select-view:not(.arco-select-view-disabled).arco-select-view-focus,.arco-form-item-status-validating .arco-input-tag:not(.arco-input-tag-disabled).arco-input-tag-focus{background-color:var(--color-bg-2);border-color:rgb(var(--primary-6));box-shadow:0 0 0 0 var(--color-primary-light-2)}.arco-form-item-status-validating .arco-picker:not(.arco-picker-disabled){border-color:transparent;background-color:var(--color-fill-2)}.arco-form-item-status-validating .arco-picker:not(.arco-picker-disabled):hover{border-color:transparent;background-color:var(--color-fill-3)}.arco-form-item-status-validating .arco-picker-focused:not(.arco-picker-disabled),.arco-form-item-status-validating .arco-picker-focused:not(.arco-picker-disabled):hover{border-color:rgb(var(--primary-6));background-color:var(--color-bg-2);box-shadow:0 0 0 0 var(--color-primary-light-2)}.arco-form-item-status-validating .arco-form-item-message-help,.arco-form-item-status-validating .arco-form-item-feedback{color:rgb(var(--primary-6))}.arco-form-item-status-success .arco-input-wrapper:not(.arco-input-disabled),.arco-form-item-status-success .arco-textarea-wrapper:not(.arco-textarea-disabled){background-color:var(--color-fill-2);border-color:transparent}.arco-form-item-status-success .arco-input-wrapper:not(.arco-input-disabled):hover,.arco-form-item-status-success .arco-textarea-wrapper:not(.arco-textarea-disabled):hover{background-color:var(--color-fill-3);border-color:transparent}.arco-form-item-status-success .arco-input-wrapper:not(.arco-input-disabled).arco-input-focus,.arco-form-item-status-success .arco-textarea-wrapper:not(.arco-textarea-disabled).arco-textarea-focus{background-color:var(--color-bg-2);border-color:rgb(var(--success-6));box-shadow:0 0 0 0 var(--color-success-light-2)}.arco-form-item-status-success .arco-select-view:not(.arco-select-view-disabled),.arco-form-item-status-success .arco-input-tag:not(.arco-input-tag-disabled){background-color:var(--color-fill-2);border-color:transparent}.arco-form-item-status-success .arco-select-view:not(.arco-select-view-disabled):hover,.arco-form-item-status-success .arco-input-tag:not(.arco-input-tag-disabled):hover{background-color:var(--color-fill-3);border-color:transparent}.arco-form-item-status-success .arco-select-view:not(.arco-select-view-disabled).arco-select-view-focus,.arco-form-item-status-success .arco-input-tag:not(.arco-input-tag-disabled).arco-input-tag-focus{background-color:var(--color-bg-2);border-color:rgb(var(--success-6));box-shadow:0 0 0 0 var(--color-success-light-2)}.arco-form-item-status-success .arco-picker:not(.arco-picker-disabled){border-color:transparent;background-color:var(--color-fill-2)}.arco-form-item-status-success .arco-picker:not(.arco-picker-disabled):hover{border-color:transparent;background-color:var(--color-fill-3)}.arco-form-item-status-success .arco-picker-focused:not(.arco-picker-disabled),.arco-form-item-status-success .arco-picker-focused:not(.arco-picker-disabled):hover{border-color:rgb(var(--success-6));background-color:var(--color-bg-2);box-shadow:0 0 0 0 var(--color-success-light-2)}.arco-form-item-status-success .arco-form-item-message-help,.arco-form-item-status-success .arco-form-item-feedback{color:rgb(var(--success-6))}.arco-form-item-status-warning .arco-input-wrapper:not(.arco-input-disabled),.arco-form-item-status-warning .arco-textarea-wrapper:not(.arco-textarea-disabled){background-color:var(--color-warning-light-1);border-color:transparent}.arco-form-item-status-warning .arco-input-wrapper:not(.arco-input-disabled):hover,.arco-form-item-status-warning .arco-textarea-wrapper:not(.arco-textarea-disabled):hover{background-color:var(--color-warning-light-2);border-color:transparent}.arco-form-item-status-warning .arco-input-wrapper:not(.arco-input-disabled).arco-input-focus,.arco-form-item-status-warning .arco-textarea-wrapper:not(.arco-textarea-disabled).arco-textarea-focus{background-color:var(--color-bg-2);border-color:rgb(var(--warning-6));box-shadow:0 0 0 0 var(--color-warning-light-2)}.arco-form-item-status-warning .arco-select-view:not(.arco-select-view-disabled),.arco-form-item-status-warning .arco-input-tag:not(.arco-input-tag-disabled){background-color:var(--color-warning-light-1);border-color:transparent}.arco-form-item-status-warning .arco-select-view:not(.arco-select-view-disabled):hover,.arco-form-item-status-warning .arco-input-tag:not(.arco-input-tag-disabled):hover{background-color:var(--color-warning-light-2);border-color:transparent}.arco-form-item-status-warning .arco-select-view:not(.arco-select-view-disabled).arco-select-view-focus,.arco-form-item-status-warning .arco-input-tag:not(.arco-input-tag-disabled).arco-input-tag-focus{background-color:var(--color-bg-2);border-color:rgb(var(--warning-6));box-shadow:0 0 0 0 var(--color-warning-light-2)}.arco-form-item-status-warning .arco-picker:not(.arco-picker-disabled){border-color:transparent;background-color:var(--color-warning-light-1)}.arco-form-item-status-warning .arco-picker:not(.arco-picker-disabled):hover{border-color:transparent;background-color:var(--color-warning-light-2)}.arco-form-item-status-warning .arco-picker-focused:not(.arco-picker-disabled),.arco-form-item-status-warning .arco-picker-focused:not(.arco-picker-disabled):hover{border-color:rgb(var(--warning-6));background-color:var(--color-bg-2);box-shadow:0 0 0 0 var(--color-warning-light-2)}.arco-form-item-status-warning .arco-form-item-message-help,.arco-form-item-status-warning .arco-form-item-feedback{color:rgb(var(--warning-6))}.arco-form-item-status-error .arco-input-wrapper:not(.arco-input-disabled),.arco-form-item-status-error .arco-textarea-wrapper:not(.arco-textarea-disabled){background-color:var(--color-danger-light-1);border-color:transparent}.arco-form-item-status-error .arco-input-wrapper:not(.arco-input-disabled):hover,.arco-form-item-status-error .arco-textarea-wrapper:not(.arco-textarea-disabled):hover{background-color:var(--color-danger-light-2);border-color:transparent}.arco-form-item-status-error .arco-input-wrapper:not(.arco-input-disabled).arco-input-focus,.arco-form-item-status-error .arco-textarea-wrapper:not(.arco-textarea-disabled).arco-textarea-focus{background-color:var(--color-bg-2);border-color:rgb(var(--danger-6));box-shadow:0 0 0 0 var(--color-danger-light-2)}.arco-form-item-status-error .arco-select-view:not(.arco-select-view-disabled),.arco-form-item-status-error .arco-input-tag:not(.arco-input-tag-disabled){background-color:var(--color-danger-light-1);border-color:transparent}.arco-form-item-status-error .arco-select-view:not(.arco-select-view-disabled):hover,.arco-form-item-status-error .arco-input-tag:not(.arco-input-tag-disabled):hover{background-color:var(--color-danger-light-2);border-color:transparent}.arco-form-item-status-error .arco-select-view:not(.arco-select-view-disabled).arco-select-view-focus,.arco-form-item-status-error .arco-input-tag:not(.arco-input-tag-disabled).arco-input-tag-focus{background-color:var(--color-bg-2);border-color:rgb(var(--danger-6));box-shadow:0 0 0 0 var(--color-danger-light-2)}.arco-form-item-status-error .arco-picker:not(.arco-picker-disabled){border-color:transparent;background-color:var(--color-danger-light-1)}.arco-form-item-status-error .arco-picker:not(.arco-picker-disabled):hover{border-color:transparent;background-color:var(--color-danger-light-2)}.arco-form-item-status-error .arco-picker-focused:not(.arco-picker-disabled),.arco-form-item-status-error .arco-picker-focused:not(.arco-picker-disabled):hover{border-color:rgb(var(--danger-6));background-color:var(--color-bg-2);box-shadow:0 0 0 0 var(--color-danger-light-2)}.arco-form-item-status-error .arco-form-item-message-help,.arco-form-item-status-error .arco-form-item-feedback{color:rgb(var(--danger-6))}.arco-form-item-control-children{position:relative}.arco-form-item-feedback{position:absolute;top:50%;right:9px;font-size:14px;transform:translateY(-50%)}.arco-form-item-feedback .arco-icon-loading{font-size:12px}.arco-form-item-has-feedback .arco-input,.arco-form-item-has-feedback .arco-input-inner-wrapper,.arco-form-item-has-feedback .arco-textarea{padding-right:28px}.arco-form-item-has-feedback .arco-input-number-mode-embed .arco-input-number-step-layer{right:24px}.arco-form-item-has-feedback .arco-select.arco-select-multiple .arco-select-view,.arco-form-item-has-feedback .arco-select.arco-select-single .arco-select-view{padding-right:28px}.arco-form-item-has-feedback .arco-select.arco-select-multiple .arco-select-suffix{padding-right:0}.arco-form-item-has-feedback .arco-cascader.arco-cascader-multiple .arco-cascader-view,.arco-form-item-has-feedback .arco-cascader.arco-cascader-single .arco-cascader-view{padding-right:28px}.arco-form-item-has-feedback .arco-cascader.arco-cascader-multiple .arco-cascader-suffix{padding-right:0}.arco-form-item-has-feedback .arco-tree-select.arco-tree-select-multiple .arco-tree-select-view,.arco-form-item-has-feedback .arco-tree-select.arco-tree-select-single .arco-tree-select-view{padding-right:28px}.arco-form-item-has-feedback .arco-tree-select.arco-tree-select-multiple .arco-tree-select-suffix{padding-right:0}.arco-form-item-has-feedback .arco-picker{padding-right:28px}.arco-form-item-has-feedback .arco-picker-suffix .arco-picker-suffix-icon,.arco-form-item-has-feedback .arco-picker-suffix .arco-picker-clear-icon{margin-right:0;margin-left:0}.arco-form{display:flex;flex-direction:column;width:100%}.arco-form-layout-inline{flex-direction:row;flex-wrap:wrap}.arco-form-layout-inline .arco-form-item{width:auto;margin-bottom:8px}.arco-form-auto-label-width .arco-form-item-label-col>.arco-form-item-label{white-space:nowrap}.arco-form-item{display:flex;align-items:flex-start;justify-content:flex-start;width:100%;margin-bottom:20px}.arco-form-item-layout-vertical{display:block}.arco-form-item-layout-vertical>.arco-form-item-label-col{justify-content:flex-start;margin-bottom:8px;padding:0;line-height:1.5715;white-space:normal}.arco-form-item-layout-inline{margin-right:24px}.arco-form-item-label-col{padding-right:16px}.arco-form-item.arco-form-item-error,.arco-form-item.arco-form-item-has-help{margin-bottom:0}.arco-form-item-wrapper-flex.arco-col{flex:1}.arco-form-size-mini .arco-form-item-label-col{line-height:24px}.arco-form-size-mini .arco-form-item-label-col>.arco-form-item-label{font-size:12px}.arco-form-size-mini .arco-form-item-content,.arco-form-size-mini .arco-form-item-wrapper-col{min-height:24px}.arco-form-size-small .arco-form-item-label-col{line-height:28px}.arco-form-size-small .arco-form-item-label-col>.arco-form-item-label{font-size:14px}.arco-form-size-small .arco-form-item-content,.arco-form-size-small .arco-form-item-wrapper-col{min-height:28px}.arco-form-size-large .arco-form-item-label-col{line-height:36px}.arco-form-size-large .arco-form-item-label-col>.arco-form-item-label{font-size:14px}.arco-form-size-large .arco-form-item-content,.arco-form-size-large .arco-form-item-wrapper-col{min-height:36px}.arco-form-item-extra{margin-top:4px;color:var(--color-text-3);font-size:12px}.arco-form-item-message{min-height:20px;color:rgb(var(--danger-6));font-size:12px;line-height:20px}.arco-form-item-message-help{color:var(--color-text-3)}.arco-form-item-message+.arco-form-item-extra{margin-top:0;margin-bottom:4px}.arco-form-item-label-col{display:flex;flex-shrink:0;justify-content:flex-end;line-height:32px;white-space:nowrap}.arco-form-item-label-col-left{justify-content:flex-start}.arco-form-item-label-col>.arco-form-item-label{max-width:100%;color:var(--color-text-2);font-size:14px;white-space:normal}.arco-form-item-label-col.arco-form-item-label-col-flex{box-sizing:content-box}.arco-form-item-wrapper-col{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-width:0;min-height:32px}.arco-form-item-content{flex:1;max-width:100%;min-height:32px}.arco-form-item-content-wrapper{display:flex;align-items:center;justify-content:flex-start;width:100%}.arco-form-item-content-flex{display:flex;align-items:center;justify-content:flex-start}.arco-form .arco-slider{display:block}.arco-form-item-label-required-symbol{color:rgb(var(--danger-6));font-size:12px;line-height:1}.arco-form-item-label-required-symbol svg{display:inline-block;transform:scale(.5)}.arco-form-item-label-tooltip{margin-left:4px;color:var(--color-text-4)}.form-blink-enter-from,.form-blink-appear-from{opacity:0}.form-blink-enter-to,.form-blink-appear-to{opacity:1}.form-blink-enter-active,.form-blink-appear-active{transition:opacity .3s cubic-bezier(0,0,1,1);animation:arco-form-blink .5s cubic-bezier(0,0,1,1)}@keyframes arco-form-blink{0%{opacity:1}50%{opacity:.2}to{opacity:1}}\n",document.head.appendChild(a),{execute:function(){}}}));
