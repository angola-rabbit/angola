// github.com/yosssi/ace を github.com/gin-gonic/gin 内で利用するためのモジュール
// gin.Engine.HTMLRender を上書きすることで利用される

package main

import (
	"github.com/gin-gonic/gin/render"
	"github.com/yosssi/ace"
	"html/template"
	"net/http"
)

type (
	// 描画オプション
	AceRenderOptions struct {
		AceOptions *ace.Options
		BaseName string
	}

	// render.Render 形式のAce用レンダー
	AceRender struct {
		Options  *AceRenderOptions
		Template *template.Template
		Data     interface{}
	}
)

// render.Render形式のインスタンスを取得する
func (a AceRender) Instance(name string, data interface{}) render.Render {
	template, err := ace.Load(a.Options.BaseName, name, a.Options.AceOptions)

	if err != nil {
		panic(err)
	}

	return AceRender{
		Template: template,
		Data:     data,
	}
}

// 描画を実行する
func (a AceRender) Render(w http.ResponseWriter) error {
	writeContentType(w, []string{"text/html; charset=utf-8"})
	return a.Template.Execute(w, a.Data)
}

// writeContentType is also in the gin/render package but it has not been made
// pubic so is repeated here, maybe convince the author to make this public.
func writeContentType(w http.ResponseWriter, value []string) {
	header := w.Header()
	if val := header["Content-Type"]; len(val) == 0 {
		header["Content-Type"] = value
	}
}
