import { shallowMount } from "@vue/test-utils";
import PaymentMethod from "@/components/PaymentMethod";
import PaymentCardType from "@/components/PaymentCardType";

describe("PaymentMethod", () => {
  let wrapper;

  beforeEach(() => {
    const item = { card_type: "Visa", last_four: "1234" };
    wrapper = shallowMount(PaymentMethod, { propsData: { item } });
  });

  it("renders the last four digits of payment card", () => {
    expect(wrapper.text()).toContain("1234");
  });

  it("renders masked text", () => {
    expect(wrapper.text()).toContain("••••");
  });

  it("renders PaymentCardType passing correct props", () => {
    const child = wrapper.find(PaymentCardType);
    expect(child).toBeDefined();
    expect(child.vm.$props.type).toBe("Visa");
  });
});
