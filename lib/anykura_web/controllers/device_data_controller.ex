defmodule AnykuraWeb.DeviceDataController do
  use AnykuraWeb, :controller
  require Logger

  def index(conn, params) do
    Logger.info(params)
    conn
    |> put_status(200)
    |> json(%{
      message: "all good"
    })
  end
end
