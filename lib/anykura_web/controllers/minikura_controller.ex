defmodule AnykuraWeb.MinikuraController do
  use AnykuraWeb, :controller
  require Logger

  def index(conn, params) do
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} <- HTTPoison.get("https://junction-tokyo.minikura.com/v1/minikura/item?oem_key=a58f6f263c8b5e6b") do
      conn
      |> put_status(200)
      |> json(Jason.decode!(body))
    end
  end

  def update(conn, params) do
    IO.inspect(params)
    IO.inspect("https://junction-tokyo.minikura.com/v1/minikura/item?oem_key=a58f6f263c8b5e6b&item_id=#{params["item_id"]}&storage_status=#{params["storage_status"]}")
    with {:ok, %HTTPoison.Response{status_code: 200, body: body}} <- HTTPoison.patch("https://junction-tokyo.minikura.com/v1/minikura/item?oem_key=a58f6f263c8b5e6b&item_id=#{params["item_id"]}&storage_status=#{params["storage_status"]}", %{}) do
      conn
      |> put_status(200)
      |> json(Jason.decode!(body))
    else
      {:ok, %HTTPoison.Response{status_code: status_code}} ->
        conn
        |> put_status(status_code)
        |> json(%{
          message: "there was a problem with your request"
        })
      {:error, message} ->
        conn
        |> put_status(400)
        |> json(%{
          message: message
        })
    end
  end
end
