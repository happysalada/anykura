defmodule AnykuraWeb.Router do
  use AnykuraWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", AnykuraWeb do

    post "/device_data", DeviceDataController, :index
    get "/minikura", MinikuraController, :index
  end

  scope "/", AnykuraWeb do
    pipe_through :browser # Use the default browser stack

    forward "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", AnykuraWeb do
  #   pipe_through :api
  # end
end
