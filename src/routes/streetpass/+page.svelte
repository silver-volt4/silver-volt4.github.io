<script>
    import yeah from "$lib/assets/images/yeah.svg";
</script>

<div>
    <div class="yeah">
        <img src={yeah} />
        <div>
            <span class="yeah-text">YEAH!</span>
            <p>You StreetPassed me!</p>
        </div>
    </div>

    <p>Hi there, StreetPass friend!</p>
    <p>
        If you're reading this, it means that you've both StreetPassed me
        <i>*and*</i> you were brave enough to open the link in my greeting!
    </p>
    <p>
        There are little people left that still carry their 3DS around. If you
        want to, you can follow me on my <b>Juxtaposition</b> (<a href="https://pretendo.network/" target="_blank">Pretendo</a> Miiverse) profile:
        <a href="https://juxt.pretendo.network/users/1319380424" target="_blank">
            Dan @silver_volt4
        </a>
    </p>
    <p>Additionally, my Discord username is at the bottom of this page.</p>
    <p>Have a nice day!</p>
    <p>- Daniel</p>
</div>

<style lang="scss">
    .yeah {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        font-size: 72px;

        .yeah-text {
            font-weight: bold;
        }

        p {
            margin: 0;
        }
    }
</style>
