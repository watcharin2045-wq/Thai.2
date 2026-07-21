// ========================================
// SoundManager.js
// ระบบเสียงของเกม
// Thai Claw Game V4.0
// ========================================

export default class SoundManager {

    constructor(scene) {

        this.scene = scene;

        this.enabled = true;

    }


    // ========================================
    // เปิด / ปิดเสียง
    // ========================================

    toggle() {

        this.enabled = !this.enabled;

        return this.enabled;

    }


    // ========================================
    // อ่านคำศัพท์ภาษาไทย
    // ========================================

    speak(text) {

        if (!this.enabled) {

            return;

        }


        // ตรวจสอบว่า Browser รองรับหรือไม่

        if (

            !("speechSynthesis" in window)

        ) {

            console.log(

                "Browser ไม่รองรับระบบอ่านออกเสียง"

            );

            return;

        }


        // หยุดเสียงเดิม

        window.speechSynthesis.cancel();


        const utterance =

            new SpeechSynthesisUtterance(

                text

            );


        // ภาษาไทย

        utterance.lang = "th-TH";


        // ความเร็วการอ่าน

        utterance.rate = 0.8;


        // ระดับเสียง

        utterance.volume = 1;


        window.speechSynthesis.speak(

            utterance

        );

    }


    // ========================================
    // เสียงตอบถูก
    // ========================================

    correct() {

        if (!this.enabled) {

            return;

        }


        // ใช้ Web Audio API

        this.beep(

            660,

            0.12

        );


        this.scene.time.delayedCall(

            120,

            () => {

                this.beep(

                    880,

                    0.18

                );

            }

        );

    }


    // ========================================
    // เสียงตอบผิด
    // ========================================

    wrong() {

        if (!this.enabled) {

            return;

        }


        this.beep(

            180,

            0.3

        );

    }


    // ========================================
    // เสียงคีบ
    // ========================================

    grab() {

        if (!this.enabled) {

            return;

        }


        this.beep(

            420,

            0.08

        );

    }


    // ========================================
    // เสียงทั่วไป
    // ========================================

    beep(

        frequency,

        duration

    ) {

        try {

            const AudioContext =

                window.AudioContext ||

                window.webkitAudioContext;


            const context =

                new AudioContext();


            const oscillator =

                context.createOscillator();


            const gainNode =

                context.createGain();


            oscillator.connect(

                gainNode

            );


            gainNode.connect(

                context.destination

            );


            oscillator.frequency.value =

                frequency;


            oscillator.type =

                "sine";


            gainNode.gain.setValueAtTime(

                0.2,

                context.currentTime

            );


            gainNode.gain.exponentialRampToValueAtTime(

                0.001,

                context.currentTime +

                duration

            );


            oscillator.start();


            oscillator.stop(

                context.currentTime +

                duration

            );

        }

        catch (error) {

            console.log(

                "ไม่สามารถเล่นเสียงได้",

                error

            );

        }

    }

}
