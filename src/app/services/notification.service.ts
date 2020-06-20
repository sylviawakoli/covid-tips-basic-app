import { Injectable } from "@angular/core";
import { FCM } from "@ionic-native/fcm/ngx";
import { environment } from "src/environments/environment";
import { Device } from "@ionic-native/device/ngx";
import { HTTP } from "@ionic-native/http/ngx";

@Injectable({ providedIn: "root" })
export class NotificationService {
  // NOTE - use ionic native http instead of angular/browser to avoid cors issues
  constructor(private fcm: FCM, private device: Device, private http: HTTP) {}
  /**
   * Initialisation is called from app.component.ts after platform ready
   * (currently only when running on device/cordova)
   * Obtain push notification token and provide to RapidPro for messaging.
   * Subscribe to messages.
   */
  init() {
    this.fcm.getToken().then((token) => {
      console.log(token);
      this.registerRapidproToken(token);
    });
    // Example code to subscribe to a specific topic.
    // Not required for general notifications
    this.fcm.subscribeToTopic("test").then(
      (v) => console.log("subscription", v),
      (err) => console.log("err", err)
    );
    this.fcm.onNotification().subscribe((data) => {
      if (data.wasTapped) {
        console.log("Received in background", data);
      } else {
        console.log("Received in foreground", data);
      }
    });
    this.fcm.onTokenRefresh().subscribe((token) => {
      this.registerRapidproToken(token);
    });
    this.fcm.hasPermission().then((hasPermission) => {
      if (hasPermission) {
        console.log("Has permission!");
      }
    });
  }

  /**
   * When device starts inform rapidpro of device id token for
   * receiving push notifications. Link to an ID unique to the device
   * so that token updates do not create new rapidpro contacts
   */
  async registerRapidproToken(fcm_token: string) {
    const { contactRegisterUrl } = environment.rapidPro;
    const urn = this.device.uuid;
    const name = `app-${urn}`;
    const data: IRegistrationData = { urn, fcm_token };
    try {
      const res = await this.http.post(contactRegisterUrl, data, {});
      console.log("token registered", res);
    } catch (error) {
      console.error(error);
    }
  }
}

interface IRegistrationData {
  urn: string; // rapidpro contact identifier
  fcm_token: string;
  name?: string;
}

interface IRapidProMessage {}
