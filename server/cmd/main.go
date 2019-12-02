package main

import (
	"app/pkg/endpoints"
	"fmt"
	"log"
	"net/http"

	"github.com/ant0ine/go-json-rest/rest"
)

func main() {
	api := rest.NewApi()
	api.Use(rest.DefaultDevStack...)

	router, err := rest.MakeRouter(
		rest.Get("/users", endpoints.GetUsers),
	)
	if err != nil {
		log.Fatal(err)
		panic("Failed to setup router.")
	}

	api.SetApp(router)
	fmt.Println("Router setup is complete.")
	log.Fatal(http.ListenAndServe(":8080", api.MakeHandler()))
}
