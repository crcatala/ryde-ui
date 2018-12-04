import { shallowMount } from "@vue/test-utils";
import PaymentCardType from "@/components/PaymentCardType";

describe("PaymentCardType", () => {
  describe("when card type is `Visa`", () => {
    it("renders visa image", () => {
      const wrapper = shallowMount(PaymentCardType, {
        propsData: { type: "Visa" }
      });

      expect(wrapper.contains(".PaymentCardType__image--visa")).toBe(true);
    });
  });

  describe("when card type is `Mastercard`", () => {
    it("renders mastercard image", () => {
      const wrapper = shallowMount(PaymentCardType, {
        propsData: { type: "Mastercard" }
      });

      expect(wrapper.contains(".PaymentCardType__image--mastercard")).toBe(
        true
      );
    });
  });

  describe("when card type is `AMEX`", () => {
    it("renders amex image", () => {
      const wrapper = shallowMount(PaymentCardType, {
        propsData: { type: "AMEX" }
      });

      expect(wrapper.contains(".PaymentCardType__image--amex")).toBe(true);
    });
  });

  describe("when card type is `Discover`", () => {
    it("renders discover image", () => {
      const wrapper = shallowMount(PaymentCardType, {
        propsData: { type: "Discover" }
      });

      expect(wrapper.contains(".PaymentCardType__image--discover")).toBe(true);
    });
  });

  describe("when card type is unknown", () => {
    it("renders unknown image", () => {
      const wrapper = shallowMount(PaymentCardType, {
        propsData: { type: "unrecognized" }
      });

      expect(wrapper.contains(".PaymentCardType__image--unknown")).toBe(true);
    });
  });
});
