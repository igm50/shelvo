package endpoints

import (
	"app/pkg/prisma"
	"context"
	"log"
	"net/http"
	"reflect"

	"github.com/ant0ine/go-json-rest/rest"
)

var ctx = context.TODO()
var client = prisma.New(nil)

func GetUsers(w rest.ResponseWriter, r *rest.Request) {
	users, err := client.Users(nil).Exec(ctx)
	if err != nil {
		handleError(w, err)
		return
	}

	usersMap := usersToMap(users)
	w.WriteJson(usersMap)
}

func handleError(w rest.ResponseWriter, err error) {
	log.Fatal(err)

	result := map[string]string{"error": "server error"}

	w.WriteJson(result)
	w.WriteHeader(http.StatusInternalServerError)
}

func usersToMap(users []prisma.User) map[string]map[string]string {
	result := make(map[string]map[string]string)

	for _, user := range users {
		tag := reflect.TypeOf(user).Field(1).Tag.Get("json")
		result[user.ID] = map[string]string{tag: user.Name}
	}

	return result
}
