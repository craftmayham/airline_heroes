PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/flight_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:viltrumite', 'flight_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('left_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(-40)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(40)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/flight_idle_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:viltrumite', 'flight_idle_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('left_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(-30)
                .setZRotDegrees(-20)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(0)
                .setYRotDegrees(30)
                .setZRotDegrees(20)
                .animate('InOutCubic', animation);

                builder.get('left_leg')
                .setXRotDegrees(20)
                .setYRotDegrees(-20)
                .setZRotDegrees(0)
                .setX(3)
                .setZ(-3)
                .animate('InOutCubic', animation);
            
                builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(30)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/dash_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:viltrumite', 'dash_animation', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('head')
                .setXRotDegrees(-60)
                .setZRotDegrees(0)
                .setX(0)
                .setY(0)
                .setZ(0)
                .animate('InOutCubic', animation);

            builder.get('body')
                .setXRotDegrees(-60)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(10)
                .setZ(0)
                .animate('InOutCubic', animation);

            builder.get('left_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(20)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
            
            builder.get('right_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(-20)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);

            builder.get('left_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);

            builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/ground_pound', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'airline_heroes:kinetic_energy_manipulation', 'charge_block_anim_timer', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('body')
                .setXRotDegrees(-30)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(-5)
                .setZ(0)
                .animate('InOutCubic', animation);

            builder.get('left_arm')
                .setXRotDegrees(34.51)
                .setYRotDegrees(3.84)
                .setZRotDegrees(-14.51)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-86.97)
                .setYRotDegrees(-32.31)
                .setZRotDegrees(65.06)
                .setY(4)
                .setZ(-4)
                .animate('InOutCubic', animation);

                builder.get('left_leg')
                .setXRotDegrees(69.14)
                .setYRotDegrees(-19.22)
                .setZRotDegrees(7.41)
                .setX(3)
                .setZ(-5)
                .animate('InOutCubic', animation);

                builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setY(5)
                .setZ(-4)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/block_anim', 1, (builder) => {
        const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:viltrumite', 'block_animation', builder.getPartialTicks());

        if (builder.isFirstPerson()) {
            builder.get('left_arm')
            .setXRotDegrees(-50)
            .animate('InOutCubic', animation);

            builder.get('right_arm')
            .setXRotDegrees(-60)
            .animate('InOutCubic', animation);
        } else {
            const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:viltrumite', 'block_animation', builder.getPartialTicks());
            if (animation > 0.0) {
                builder.get('left_arm')
                .setXRotDegrees(-70)
                .setYRotDegrees(40)
                .setZRotDegrees(30)
                .animate('InOutCubic', animation);

                builder.get('right_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(-40)
                .setZRotDegrees(-30)
                .animate('InOutCubic', animation);

            }
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/royal_block_anim', 1, (builder) => {
        const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'block_animation', builder.getPartialTicks());

        if (builder.isFirstPerson()) {
            builder.get('left_arm')
            .setXRotDegrees(-50)
            .animate('InOutCubic', animation);

            builder.get('right_arm')
            .setXRotDegrees(-60)
            .animate('InOutCubic', animation);
        } else {
            const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'block_animation', builder.getPartialTicks());
            if (animation > 0.0) {
                builder.get('left_arm')
                .setXRotDegrees(-70)
                .setYRotDegrees(40)
                .setZRotDegrees(30)
                .animate('InOutCubic', animation);

                builder.get('right_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(-40)
                .setZRotDegrees(-30)
                .animate('InOutCubic', animation);

            }
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/sonic_clap_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'sonic_clap_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('left_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(30)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-90)
                .setYRotDegrees(-30)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/flight_idle_anim_royal', 1, (builder) => {
        const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'flight_idle_anim', builder.getPartialTicks());

        if (builder.isFirstPerson()) {
            builder.get('left_arm')
            .setXRotDegrees(-90)
            .setYRotDegrees(20)
            .setZRotDegrees(90)
            .animate('InOutCubic', animation);

            builder.get('right_arm')
            .setXRotDegrees(-90)
            .setYRotDegrees(-10)
            .setZRotDegrees(-90)
            .animate('InOutCubic', animation);
        } else {
            const animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'flight_idle_anim', builder.getPartialTicks());
            if (animation > 0.0) {

            builder.get('left_arm')
                .setXRotDegrees(-70)
                .setYRotDegrees(50)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-110)
                .setYRotDegrees(-50)
                .setZRotDegrees(30)
                .animate('InOutCubic', animation);
            }
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/royal_flight_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'flight_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('left_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(-40)
                .setZRotDegrees(10)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-180)
                .setYRotDegrees(40)
                .setZRotDegrees(-25)
                .setX(-4)
                .setY(5)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/royal_impale_anim', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'impale_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('head')
                .setYRotDegrees(20)

            builder.get('body')
                .setXRotDegrees(0)
                .setYRotDegrees(17.5)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);

            builder.get('left_arm')
                .setXRotDegrees(16.14)
                .setYRotDegrees(-35.8)
                .setZRotDegrees(-33.6)
                .animate('InOutCubic', animation);
            
            builder.get('right_arm')
                .setXRotDegrees(-107.58)
                .setYRotDegrees(6.99)
                .setZRotDegrees(-82.1)
                .setX(-5)
                .setY(3)
                .setZ(-3)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/royal_ground_pound', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:royal_viltrumite', 'explosive_slam_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('body')
                .setXRotDegrees(-30)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setX(0)
                .setY(-5)
                .setZ(0)
                .animate('InOutCubic', animation);

            builder.get('left_arm')
                .setXRotDegrees(34.51)
                .setYRotDegrees(3.84)
                .setZRotDegrees(-14.51)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-86.97)
                .setYRotDegrees(-32.31)
                .setZRotDegrees(65.06)
                .setY(4)
                .setZ(-4)
                .animate('InOutCubic', animation);

                builder.get('left_leg')
                .setXRotDegrees(69.14)
                .setYRotDegrees(-19.22)
                .setZRotDegrees(7.41)
                .setX(3)
                .setZ(-5)
                .animate('InOutCubic', animation);

                builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(0)
                .setZRotDegrees(0)
                .setY(5)
                .setZ(-4)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/millon_stabs', 1, (builder) => {
        let animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:d_weapons', 'millon_stabs_anim', builder.getPartialTicks());

        if (animation > 0) {
            builder.get('head')
                .setXRotDegrees(-10)
                .setYRotDegrees(20)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);

            builder.get('body')
                .setXRotDegrees(-10)
                .setYRotDegrees(30)
                .setZRotDegrees(10)
                .animate('InOutCubic', animation);

            builder.get('left_arm')
                .setXRotDegrees(10)
                .setYRotDegrees(-30)
                .setZRotDegrees(-20)
                .animate('InOutCubic', animation);
            
                builder.get('right_arm')
                .setXRotDegrees(-60)
                .setYRotDegrees(30)
                .setZRotDegrees(20)
                .animate('InOutCubic', animation);

                builder.get('left_leg')
                .setXRotDegrees(20)
                .setYRotDegrees(-20)
                .setZRotDegrees(0)
                .setX(3)
                .setZ(-3)
                .animate('InOutCubic', animation);
            
                builder.get('right_leg')
                .setXRotDegrees(0)
                .setYRotDegrees(30)
                .setZRotDegrees(0)
                .animate('InOutCubic', animation);
        }
    });
});

PalladiumEvents.registerAnimations((event) => {
    event.register('airline_heroes/res_pose', 20, (builder) => {
        const activate_res_animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:espada_1', 'res_pose_timer', builder.getPartialTicks());

        if (builder.isFirstPerson()) {
            builder.get('body').setXRotDegrees(12.48848).animate('InOutBack', activate_res_animation);
            builder.get('body').setYRotDegrees(0.54094).animate('InOutBack', activate_res_animation);
            builder.get('body').setZRotDegrees(-2.44081).animate('InOutBack', activate_res_animation);
            builder.get('body').setX(-1).animate('InOutBack', activate_res_animation);
            builder.get('body').setY(-9).animate('InOutBack', activate_res_animation);
            builder.get('body').setZ(-3).animate('InOutBack', activate_res_animation);
        } else {
            const activate_res_animation = animationUtil.getAnimationTimerAbilityValue(builder.getPlayer(), 'pp:espada_1', 'res_pose_timer', builder.getPartialTicks());
            if (activate_res_animation > 0.0) {
                builder.get('head').setXRotDegrees(12.45392).animate('InOutBack', activate_res_animation);
                builder.get('head').setYRotDegrees(1.08089).animate('InOutBack', activate_res_animation);
                builder.get('head').setZRotDegrees(-4.88206).animate('InOutBack', activate_res_animation);

                builder.get('body').setXRotDegrees(2.5).animate('InOutBack', activate_res_animation);
                builder.get('body').setYRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('body').setZRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('body').setY(-11).animate('InOutBack', activate_res_animation);

                builder.get('right_arm').setXRotDegrees(12.79362).animate('InOutBack', activate_res_animation);
                builder.get('right_arm').setYRotDegrees(12.19908).animate('InOutBack', activate_res_animation);
                builder.get('right_arm').setZRotDegrees(2.74715).animate('InOutBack', activate_res_animation);

                builder.get('left_arm').setXRotDegrees(-106.80748).animate('InOutBack', activate_res_animation);
                builder.get('left_arm').setYRotDegrees(12.60837).animate('InOutBack', activate_res_animation);
                builder.get('left_arm').setZRotDegrees(-56.59341).animate('InOutBack', activate_res_animation);

                builder.get('right_leg').setXRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('right_leg').setYRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('right_leg').setZRotDegrees(-90).animate('InOutBack', activate_res_animation);
                builder.get('right_leg').setX(-5).animate('InOutBack', activate_res_animation);
                builder.get('right_leg').setY(10).animate('InOutBack', activate_res_animation);
                builder.get('right_leg').setZ(-4).animate('InOutBack', activate_res_animation);

                builder.get('left_leg').setXRotDegrees(-12.5).animate('InOutBack', activate_res_animation);
                builder.get('left_leg').setYRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('left_leg').setZRotDegrees(0).animate('InOutBack', activate_res_animation);
                builder.get('left_leg').setX(2).animate('InOutBack', activate_res_animation);
                builder.get('left_leg').setY(1).animate('InOutBack', activate_res_animation);
                builder.get('left_leg').setZ(-3).animate('InOutBack', activate_res_animation);
            }
        }
    });
});