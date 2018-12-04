import { mount } from "@vue/test-utils";
import TripsPage from "@/pages/TripsPage";
import flushPromises from "flush-promises";
import api from "@/api";

jest.mock("@/api", () => {
  return {
    getTrips: jest.fn()
  };
});

describe("TripsPage", () => {
  describe("initial loading behavior", () => {
    it("renders a loading indicator when fetching trips", () => {
      const wrapper = mount(TripsPage);

      expect(wrapper.contains(".TripsPage__loading")).toBe(true);
    });
  });

  describe("fetching trips", () => {
    describe("when api request is successful", () => {
      describe("when trips are returned", () => {
        beforeEach(() => {
          api.getTrips.mockImplementation(() => {
            return Promise.resolve({
              data: [
                {
                  id: 69,
                  car: { type: "uberPool" },
                  city: "Dallas",
                  driver: { id: 3, name: "Tony" },
                  fare: 47.96,
                  payment_method: {
                    id: 2,
                    card_type: "Mastercard",
                    last_four: "3388",
                    type: "credit_card"
                  },
                  pickup_time: "2018-12-03T15:37:10.000Z"
                },
                {
                  id: 95,
                  car: { type: "uberPool" },
                  city: "Detroit",
                  driver: { id: 1, name: "Quentin" },
                  fare: 58.05,
                  payment_method: {
                    id: 3,
                    card_type: "AMEX",
                    last_four: "5888",
                    type: "credit_card"
                  },
                  pickup_time: "2018-12-03T11:01:09.000Z"
                }
              ]
            });
          });
        });

        it("renders a the correct number of trips", async () => {
          const wrapper = mount(TripsPage);

          await flushPromises();

          expect(wrapper.findAll("tbody > tr").length).toBe(2);
        });

        it("ensures loading indicator no longer rendered after completing request", async () => {
          const wrapper = mount(TripsPage);

          await flushPromises();

          expect(wrapper.contains(".TripsPage__loading")).toBe(false);
        });

        describe("when no trips are returned", () => {
          beforeEach(() => {
            api.getTrips.mockImplementation(() => {
              return Promise.resolve({
                data: []
              });
            });
          });

          it("renders no results", async () => {
            const wrapper = mount(TripsPage);

            await flushPromises();

            expect(wrapper.text()).toContain("No Trips");
          });

          it("ensures loading indicator no longer rendered after completing request", async () => {
            const wrapper = mount(TripsPage);

            await flushPromises();

            expect(wrapper.contains(".TripsPage__loading")).toBe(false);
          });
        });
      });
    });

    describe("when api request is unsuccessful", () => {
      beforeEach(() => {
        api.getTrips.mockImplementation(() => {
          return Promise.reject();
        });
      });

      it("renders an error", async () => {
        const wrapper = mount(TripsPage);

        await flushPromises();

        expect(wrapper.text()).toContain("Error fetching trips");
      });

      it("ensures loading indicator no longer rendered after completing request", async () => {
        const wrapper = mount(TripsPage);

        await flushPromises();

        expect(wrapper.contains(".TripsPage__loading")).toBe(false);
      });
    });
  });
});
