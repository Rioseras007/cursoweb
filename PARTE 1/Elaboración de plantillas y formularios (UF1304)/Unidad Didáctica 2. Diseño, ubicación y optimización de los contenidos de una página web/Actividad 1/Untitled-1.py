
import requests

response = requests.request(
    method="POST",
    url="https://api.meshy.ai/openapi/v2/text-to-3d",
    headers={
        "Authorization": "Bearer msy_FKM0UyLQ2PzXRQX4AvOPa74jTtVXa1wlsao8",
    },
    json={
      "mode": "preview",
      "should_remesh": False
    },
)
print(response.json())